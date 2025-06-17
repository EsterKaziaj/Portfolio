using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Evente.Controllers
{

 [Authorize]
public class UsersController : Controller
{
	private readonly UserManager<IdentityUser> _userManager;
	private readonly RoleManager<IdentityRole> _roleManager;
	private readonly SignInManager<IdentityUser> _signInManager;
	public UsersController(UserManager<IdentityUser> userManager, RoleManager<IdentityRole> roleManager, SignInManager<IdentityUser> signInManager)
	{
		_userManager = userManager;
		_roleManager = roleManager;
		_signInManager = signInManager;
	}

	[HttpPost]
	public async Task<IActionResult> AssignRoleToUser(string userId, string roleName)
	{
		var user = await _userManager.FindByIdAsync(userId);
		if (user == null)
		{
			return NotFound("User not found");
		}

		if (!await _roleManager.RoleExistsAsync(roleName))
		{
			return NotFound("Role not found");
		}

		var result = await _userManager.AddToRoleAsync(user, roleName);
		if (result.Succeeded)
		{

			await _signInManager.RefreshSignInAsync(user);

			return Ok($"User {user.UserName} has been assigned to role {roleName} and claims refreshed.");
		}

		return BadRequest(result.Errors);
	}
}
}
