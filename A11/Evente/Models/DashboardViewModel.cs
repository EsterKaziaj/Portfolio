using Evente.Models;

namespace Evente.Models
{
    public class DashboardViewModel
    {
        public int TotalTicketsSold { get; set; }
        public decimal TotalRevenue { get; set; }
        public int ActiveEvents { get; set; }
        public int TotalCategories { get; set; }
        public List<WeeklySalesData> WeeklySalesData { get; set; } = new();
        public List<CategoryData> CategoryData { get; set; } = new();
        public List<Event> RecentEvents { get; set; } = new();
    }

    public class WeeklySalesData
    {
        public string Week { get; set; } = string.Empty;
        public int ThisMonth { get; set; }
        public int LastMonth { get; set; }
    }

    public class CategoryData
    {
        public string Name { get; set; } = string.Empty;
        public int Value { get; set; }
        public int Count { get; set; }
    }
}