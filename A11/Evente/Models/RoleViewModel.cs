using System.ComponentModel.DataAnnotations;
namespace Evente.Models
{
    public class RoleViewModel
    {
        [Required]
        [Display(Name = "Role")]
        public string Name { get; set; }
    }
}
