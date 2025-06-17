using System.Diagnostics;
using Evente.Data;
using Evente.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
namespace Evente.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly ApplicationDbContext _context;
        public HomeController(ILogger<HomeController> logger, ApplicationDbContext context)
        {
            _logger = logger;
            _context = context;
        }
        public async Task<IActionResult> Index(string? category = null, DateTime? date = null)
        {
            try
            {
                var eventsQuery = _context.Events
                    .Include(e => e.Kategori)
                    .AsQueryable();
                if (!string.IsNullOrEmpty(category))
                {
                    eventsQuery = eventsQuery.Where(e => e.Kategori.Name == category);
                }
                if (date.HasValue)
                {
                    eventsQuery = eventsQuery.Where(e => e.Date.Date == date.Value.Date);
                }
                var featuredEvent = await eventsQuery
                    .OrderBy(e => e.Date)
                    .FirstOrDefaultAsync();
                var upcomingEvents = await eventsQuery
                    .Where(e => e.Date > DateTime.Now)
                    .OrderBy(e => e.Date)
                    .Take(3)
                    .ToListAsync();
                var viewModel = new HomeViewModel
                {
                    FeaturedEvent = featuredEvent,
                    UpcomingEvents = upcomingEvents
                };
                if (!Request.Headers["X-Requested-With"].ToString().Contains("XMLHttpRequest"))
                {
                    // Populate filter dropdowns
                    ViewBag.Categories = await _context.Events
                        .Include(e => e.Kategori)
                        .Select(e => e.Kategori.Name)
                        .Distinct()
                        .ToListAsync();
                    ViewBag.AvailableDates = await _context.Events
                        .Where(e => e.Date > DateTime.Now)
                        .Select(e => e.Date.Date)
                        .Distinct()
                        .OrderBy(d => d)
                        .ToListAsync();
                    return View(viewModel);
                }
                return PartialView("_EventsGrid", viewModel.UpcomingEvents);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occurred while fetching events");
                return View("Error");
            }
        }
        public IActionResult Privacy()
        {
            return View();
        }
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}