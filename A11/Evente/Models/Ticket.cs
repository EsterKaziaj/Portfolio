namespace Evente.Models
{
    public class Ticket
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
        public int QuantityAvailable { get; set; }
        public string Description { get; set; }

        // shtes per perdorim ne view
        public string ImagePath { get; set; }
        public string Location { get; set; }
        public DateTime Date { get; set; }
        public string Time { get; set; }
        public string TicketLink { get; set; }

        public int EventId { get; set; }
        public Event Event { get; set; }
    }
}
