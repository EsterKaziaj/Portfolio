using System.ComponentModel.DataAnnotations;

namespace Evente.Models
{
    public class Contact
    {
        [Required(ErrorMessage = "Fill In The Subject!")]
        [StringLength(20)]
        
        public string? Subject { get; set; }

        [Required(ErrorMessage = "Fill In Your Name!")]
        [StringLength(20)]
      
        public string? Name { get; set; }
        [Required]
      
        public string? Email { get; set; }
        [Required(ErrorMessage = "Fill In Your Request Or Complain!")]
        public string? Message { get; set; }
    }
}
