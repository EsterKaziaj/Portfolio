using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Evente.Data;
using Evente.Models;

namespace Evente.Controllers
{
    public class EventsController : Controller
    {
        private readonly ApplicationDbContext _context;

        public EventsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: Events
        public async Task<IActionResult> Index()
        {
            // Logging to console for simple debugging checks
            Console.WriteLine("Fetching list of events.");
            if (_context.Events == null)
            {
                Console.WriteLine("Entity set 'ApplicationDbContext.Events' is null.");
                return Problem("Entity set 'ApplicationDbContext.Events' is null.");
            }
            return View(await _context.Events.ToListAsync());
        }

        // GET: Events/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                Console.WriteLine("Event ID is null.");
                return NotFound("Event ID is null.");
            }

            if (_context.Events == null)
            {
                Console.WriteLine("Entity set 'ApplicationDbContext.Events' is null.");
                return Problem("Entity set 'ApplicationDbContext.Events' is null.");
            }

            var @event = await _context.Events.FirstOrDefaultAsync(m => m.Id == id);
            if (@event == null)
            {
                Console.WriteLine($"Event with ID {id} not found.");
                return NotFound($"Event with ID {id} not found.");
            }

            return View(@event);
        }

        // POST: Events/ReserveTicket
        [HttpPost]
        public async Task<IActionResult> ReserveTicket(int id, string email)
        {
            if (string.IsNullOrEmpty(email))
            {
                Console.WriteLine("Email is required.");
                return BadRequest("Email is required.");
            }

            if (_context.Events == null)
            {
                Console.WriteLine("Entity set 'ApplicationDbContext.Events' is null.");
                return Problem("Entity set 'ApplicationDbContext.Events' is null.");
            }

            var @event = await _context.Events.FindAsync(id);
            if (@event == null)
            {
                Console.WriteLine($"Event with ID {id} not found.");
                return NotFound($"Event with ID {id} not found.");
            }

            // Check if there are available seats
            if (@event.AvailableSeats <= 0)
            {
                Console.WriteLine("No available seats.");
                return BadRequest("No available seats.");
            }

            // Decrement available seats
            @event.AvailableSeats--;
            _context.Update(@event);
            await _context.SaveChangesAsync();

            // Logging reservation success
            Console.WriteLine($"Ticket reserved for event ID {id} successfully.");
            return Json(new { success = true, message = "BILETA U REZERVUA ME SUKSES" });
        }

        // GET: Events/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Events/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,Name,Date,Location,Description,TicketPrice,AvailableSeats")] Event @event)
        {
            if (ModelState.IsValid)
            {
                _context.Add(@event);
                await _context.SaveChangesAsync();
                Console.WriteLine("Event created successfully.");
                return RedirectToAction(nameof(Index));
            }
            return View(@event);
        }

        // GET: Events/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                Console.WriteLine("Event ID is null.");
                return NotFound("Event ID is null.");
            }

            if (_context.Events == null)
            {
                Console.WriteLine("Entity set 'ApplicationDbContext.Events' is null.");
                return Problem("Entity set 'ApplicationDbContext.Events' is null.");
            }

            var @event = await _context.Events.FindAsync(id);
            if (@event == null)
            {
                Console.WriteLine($"Event with ID {id} not found.");
                return NotFound($"Event with ID {id} not found.");
            }

            return View(@event);
        }

        // POST: Events/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("Id,Name,Date,Location,Description,TicketPrice,AvailableSeats")] Event @event)
        {
            if (id != @event.Id)
            {
                Console.WriteLine("Event ID mismatch.");
                return NotFound("Event ID mismatch.");
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(@event);
                    await _context.SaveChangesAsync();
                    Console.WriteLine("Event updated successfully.");
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!EventExists(@event.Id))
                    {
                        Console.WriteLine($"Event with ID {id} not found during update.");
                        return NotFound($"Event with ID {id} not found during update.");
                    }
                    else
                    {
                        Console.WriteLine("Concurrency exception occurred.");
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(@event);
        }

        // GET: Events/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                Console.WriteLine("Event ID is null.");
                return NotFound("Event ID is null.");
            }

            if (_context.Events == null)
            {
                Console.WriteLine("Entity set 'ApplicationDbContext.Events' is null.");
                return Problem("Entity set 'ApplicationDbContext.Events' is null.");
            }

            var @event = await _context.Events.FirstOrDefaultAsync(m => m.Id == id);
            if (@event == null)
            {
                Console.WriteLine($"Event with ID {id} not found.");
                return NotFound($"Event with ID {id} not found.");
            }

            return View(@event);
        }

        // POST: Events/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            if (_context.Events == null)
            {
                Console.WriteLine("Entity set 'ApplicationDbContext.Events' is null.");
                return Problem("Entity set 'ApplicationDbContext.Events' is null.");
            }
            var @event = await _context.Events.FindAsync(id);
            if (@event != null)
            {
                _context.Events.Remove(@event);
                Console.WriteLine($"Event with ID {id} removed successfully.");
            }

            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool EventExists(int id)
        {
            Console.WriteLine($"Checking existence for event ID {id}.");
            return (_context.Events?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}