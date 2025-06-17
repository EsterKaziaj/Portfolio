using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System.Net;
using System.Net.Mail;
using Evente.Models;

namespace Events_Project.Controllers
{
    public class ContuctUsController : Controller
    {
        private readonly EmailSettings _emailSettings;

        public ContuctUsController(IOptions<EmailSettings> emailSettings)
        {
            _emailSettings = emailSettings.Value;
        }

        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Index(Contact model)
        {
            if (!ModelState.IsValid)
                return View(model);

            try
            {
                var fromAddress = new MailAddress(_emailSettings.SenderEmail!, _emailSettings.SenderName);
                var toAddress = new MailAddress(_emailSettings.SenderEmail!, "Admin");

                string subject = model.Subject!;
                string body = $"Name: {model.Name}\nEmail: {model.Email}\nMessage:\n{model.Message}";

                using var smtp = new SmtpClient
                {
                    Host = _emailSettings.SmtpServer,
                    Port = _emailSettings.SmtpPort,
                    EnableSsl = true,
                    Credentials = new NetworkCredential(_emailSettings.SenderEmail, _emailSettings.SenderPassword),
                };

                using var message = new MailMessage(fromAddress, toAddress)
                {
                    Subject = subject,
                    Body = body
                };

                smtp.Send(message);

                // Pas suksesit, shkon ne view te dedikuar
                return RedirectToAction("ThankYou");
            }
            catch (Exception)
            {
                ModelState.AddModelError("", "There was an error sending your message. Please try again later.");
                return View(model);
            }
        }

        [HttpGet]
        public IActionResult ThankYou()
        {
            return View();
        }
    }
}
