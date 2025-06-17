namespace Evente.Models
{
    public class FavoriteEventsViewModel
    {
        public EventSubcategory CurrentEvent { get; set; }
        public List<EventSubcategory> AllFavoriteEvents { get; set; }
        public int CurrentIndex { get; set; }
        public int TotalEvents { get; set; }
    }
}
