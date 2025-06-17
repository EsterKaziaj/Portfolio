using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Evente.Data;
using Evente.Models;
using System.Globalization;

namespace Evente.Controllers
{
    public class DashboardController : Controller
    {
        private readonly ApplicationDbContext _context;

        public DashboardController(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IActionResult> Index()
        {
            try
            {
                var dashboardData = await GetDashboardDataAsync();
                return View(dashboardData);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Dashboard error: {ex.Message}");
                // Return view with empty data if there's an error
                var emptyData = new DashboardViewModel
                {
                    TotalTicketsSold = 0,
                    TotalRevenue = 0,
                    ActiveEvents = 0,
                    TotalCategories = 0,
                    WeeklySalesData = new List<WeeklySalesData>(),
                    CategoryData = new List<CategoryData>(),
                    RecentEvents = new List<Event>()
                };
                return View(emptyData);
            }
        }

        [HttpGet]
        public async Task<IActionResult> GetSalesData(string period = "weekly")
        {
            try
            {
                var salesData = await GetSalesDataByPeriod(period);
                return Json(salesData);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Sales data error: {ex.Message}");
                return Json(new List<object>());
            }
        }

        [HttpGet]
        public async Task<IActionResult> GetCategoryData()
        {
            try
            {
                var categoryData = await GetCategoryDataAsync();
                return Json(categoryData);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Category data error: {ex.Message}");
                return Json(new List<object>());
            }
        }

        private async Task<DashboardViewModel> GetDashboardDataAsync()
        {
            // Get current month and last month data
            var currentMonth = DateTime.Now.Month;
            var currentYear = DateTime.Now.Year;
            var lastMonth = currentMonth == 1 ? 12 : currentMonth - 1;
            var lastMonthYear = currentMonth == 1 ? currentYear - 1 : currentYear;

            // Calculate total tickets sold (using available seats logic)
            var allEvents = await _context.Events.ToListAsync();
            var totalTicketsSold = allEvents.Sum(e => Math.Max(0, 100 - e.AvailableSeats)); // Assuming initial capacity was higher

            // Calculate total revenue
            var totalRevenue = allEvents.Sum(e =>
                Math.Max(0, 50 - e.AvailableSeats) * e.TicketPrice); // Assuming some tickets were sold

            // Active events (events in the future)
            var activeEvents = await _context.Events
                .Where(e => e.Date >= DateTime.Now)
                .CountAsync();

            // Total categories
            var totalCategories = await _context.Kategori.CountAsync();

            // Weekly sales data
            var weeklySalesData = await GetWeeklySalesDataAsync();

            // Category distribution
            var categoryData = await GetCategoryDataAsync();

            // Recent events
            var recentEvents = await _context.Events
                .Include(e => e.Kategori)
                .OrderByDescending(e => e.Date)
                .Take(5)
                .ToListAsync();

            return new DashboardViewModel
            {
                TotalTicketsSold = totalTicketsSold,
                TotalRevenue = totalRevenue,
                ActiveEvents = activeEvents,
                TotalCategories = totalCategories,
                WeeklySalesData = weeklySalesData,
                CategoryData = categoryData,
                RecentEvents = recentEvents
            };
        }

        private async Task<List<WeeklySalesData>> GetWeeklySalesDataAsync()
        {
            var weeklySales = new List<WeeklySalesData>();
            var currentDate = DateTime.Now;
            var startDate = currentDate.AddDays(-28); // Last 4 weeks of current month
            var lastMonthStartDate = currentDate.AddMonths(-1).AddDays(-28); // Same 4 weeks but last month

            for (int i = 0; i < 4; i++)
            {
                // Current month week
                var weekStart = startDate.AddDays(i * 7);
                var weekEnd = weekStart.AddDays(7);

                var weekEvents = await _context.Events
                    .Where(e => e.Date >= weekStart && e.Date < weekEnd)
                    .ToListAsync();

                var thisWeekRevenue = weekEvents.Sum(e =>
                    Math.Max(0, 30 - e.AvailableSeats) * e.TicketPrice);

                // Same week but last month
                var lastMonthWeekStart = lastMonthStartDate.AddDays(i * 7);
                var lastMonthWeekEnd = lastMonthWeekStart.AddDays(7);

                var lastMonthWeekEvents = await _context.Events
                    .Where(e => e.Date >= lastMonthWeekStart && e.Date < lastMonthWeekEnd)
                    .ToListAsync();

                var lastWeekRevenue = lastMonthWeekEvents.Sum(e =>
                    Math.Max(0, 30 - e.AvailableSeats) * e.TicketPrice);

                weeklySales.Add(new WeeklySalesData
                {
                    Week = $"Week {i + 1}",
                    ThisMonth = (int)thisWeekRevenue,
                    LastMonth = (int)lastWeekRevenue
                });
            }

            return weeklySales;
        }

        private async Task<List<CategoryData>> GetCategoryDataAsync()
        {
            var categories = await _context.Kategori
                .Include(k => k.Events)
                .ToListAsync();

            var totalEvents = categories.Sum(c => c.Events.Count);
            if (totalEvents == 0) totalEvents = 1; // Prevent division by zero

            var categoryData = categories.Select(c => new CategoryData
            {
                Name = c.Name,
                Value = totalEvents > 0 ? (c.Events.Count * 100) / totalEvents : 0,
                Count = c.Events.Count
            }).ToList();

            return categoryData;
        }

        private async Task<List<object>> GetSalesDataByPeriod(string period)
        {
            switch (period.ToLower())
            {
                case "daily":
                    return await GetDailySalesData();
                case "monthly":
                    return await GetMonthlySalesData();
                default:
                    var weeklyData = await GetWeeklySalesDataAsync();
                    return weeklyData.Cast<object>().ToList();
            }
        }

        private async Task<List<object>> GetDailySalesData()
        {
            var dailySales = new List<object>();
            var currentDate = DateTime.Now;
            var startDate = currentDate.AddDays(-7); // Last 7 days (this week)
            var lastWeekStartDate = currentDate.AddDays(-14); // Previous 7 days (last week)

            for (int i = 0; i < 7; i++)
            {
                // This week
                var date = startDate.AddDays(i);
                var dayEvents = await _context.Events
                    .Where(e => e.Date.Date == date.Date)
                    .ToListAsync();

                var dayRevenue = dayEvents.Sum(e =>
                    Math.Max(0, 20 - e.AvailableSeats) * e.TicketPrice);

                // Same day last week
                var lastWeekDate = lastWeekStartDate.AddDays(i);
                var lastWeekDayEvents = await _context.Events
                    .Where(e => e.Date.Date == lastWeekDate.Date)
                    .ToListAsync();

                var lastWeekDayRevenue = lastWeekDayEvents.Sum(e =>
                    Math.Max(0, 20 - e.AvailableSeats) * e.TicketPrice);

                dailySales.Add(new
                {
                    day = date.ToString("ddd"),
                    thisWeek = (int)dayRevenue,
                    lastWeek = (int)lastWeekDayRevenue
                });
            }

            return dailySales;
        }

        private async Task<List<object>> GetMonthlySalesData()
        {
            var monthlySales = new List<object>();
            var currentDate = DateTime.Now;
            var startDate = currentDate.AddMonths(-6); // Last 6 months this year
            var lastYearStartDate = currentDate.AddYears(-1).AddMonths(-6); // Same 6 months last year

            for (int i = 0; i < 6; i++)
            {
                // This year
                var monthStart = startDate.AddMonths(i);
                var monthEnd = monthStart.AddMonths(1);

                var monthEvents = await _context.Events
                    .Where(e => e.Date >= monthStart && e.Date < monthEnd)
                    .ToListAsync();

                var monthRevenue = monthEvents.Sum(e =>
                    Math.Max(0, 40 - e.AvailableSeats) * e.TicketPrice);

                // Same month last year
                var lastYearMonthStart = lastYearStartDate.AddMonths(i);
                var lastYearMonthEnd = lastYearMonthStart.AddMonths(1);

                var lastYearMonthEvents = await _context.Events
                    .Where(e => e.Date >= lastYearMonthStart && e.Date < lastYearMonthEnd)
                    .ToListAsync();

                var lastYearMonthRevenue = lastYearMonthEvents.Sum(e =>
                    Math.Max(0, 40 - e.AvailableSeats) * e.TicketPrice);

                monthlySales.Add(new
                {
                    month = monthStart.ToString("MMM"),
                    thisYear = (int)monthRevenue,
                    lastYear = (int)lastYearMonthRevenue
                });
            }

            return monthlySales;
        }
    }
}