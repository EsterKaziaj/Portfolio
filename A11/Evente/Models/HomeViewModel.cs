using System.Collections.Generic;

namespace Evente.Models
{
    public class HomeViewModel
    {
        public Event? FeaturedEvent { get; set; }
        public List<Event> UpcomingEvents { get; set; } = new List<Event>();
    }
}