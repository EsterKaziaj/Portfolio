using Microsoft.AspNetCore.Mvc;

namespace Evente.Controllers
{
    public class AboutController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
