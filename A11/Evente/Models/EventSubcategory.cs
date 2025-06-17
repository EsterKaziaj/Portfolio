namespace Evente.Models
{
    public class EventSubcategory
    {
        public string Name { get; set; }
        public string Url { get; set; }
        public string Description { get; set; }
        public string Date { get; set; }
        public string Time { get; set; }
        public string Venue { get; set; }
        public double Price { get; set; }
        public string TicketUrl { get; set; }
        public string ImageUrl { get; set; }
        public string Location { get; set; }
        public bool IsFavorite { get; set; }

        public EventSubcategory(string name, string url, string description, string date, string time,
                                string venue, string location, double price, string ticketUrl, string imageUrl)
        {
            Name = name;
            Url = url;
            Description = description;
            Date = date;
            Time = time;
            Venue = venue;
            Location = location;
            Price = price;
            TicketUrl = ticketUrl;
            ImageUrl = imageUrl;
        }
    }
}
