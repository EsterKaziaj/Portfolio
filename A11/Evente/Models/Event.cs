using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace Evente.Models
{
    public class Event
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "Please enter the event name!")]
        public string Name { get; set; } = null!;

        [Required(ErrorMessage = "Please enter the event date!")]
        public DateTime Date { get; set; }

        [Required(ErrorMessage = "Please enter the location!")]
        public string Location { get; set; } = null!;

        [Required(ErrorMessage = "Please enter a description!")]
        public string Description { get; set; } = null!;

        [Required(ErrorMessage = "Please enter the ticket price!")]
        [Range(0, double.MaxValue, ErrorMessage = "Ticket price must be a positive value!")]
        [Precision(18, 2)]
        public decimal TicketPrice { get; set; }

        [Required(ErrorMessage = "Please specify the available seats!")]
        public int AvailableSeats { get; set; }

        [Required(ErrorMessage = "Please select a category!")]
        public int KategoriId { get; set; }

        public Kategori Kategori { get; set; } = null!;
    }
}

