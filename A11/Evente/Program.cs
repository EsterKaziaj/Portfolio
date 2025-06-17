using Evente.Data;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

// Build the application host
var builder = WebApplication.CreateBuilder(args);

// Configuration setup from appsettings.json
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

// Configure services
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(connectionString, sqlOptions =>
        sqlOptions.EnableRetryOnFailure()));

builder.Services.AddDatabaseDeveloperPageExceptionFilter();

builder.Services.AddIdentity<IdentityUser, IdentityRole>()
    .AddEntityFrameworkStores<ApplicationDbContext>()
    .AddDefaultUI()
    .AddDefaultTokenProviders();

builder.Services.AddControllersWithViews();
builder.Services.AddRazorPages(); // <-- This is required


var app = builder.Build();

// Function to ensure roles exist
async Task EnsureRolesExist(IServiceProvider serviceProvider)
{
    var roleManager = serviceProvider.GetRequiredService<RoleManager<IdentityRole>>();
    string[] roles = { "Admin", "User", "Manager" };

    foreach (var role in roles)
    {
        if (!await roleManager.RoleExistsAsync(role))
        {
            var result = await roleManager.CreateAsync(new IdentityRole(role));
            if (result.Succeeded)
            {
                Console.WriteLine($"Role '{role}' created successfully.");
            }
            else
            {
                Console.WriteLine($"Failed to create role '{role}': {string.Join(", ", result.Errors.Select(e => e.Description))}");
            }
        }
    }
}

// Function to assign the "Admin" role
async Task AssignAdminRole(IServiceProvider serviceProvider, string email)
{
    var userManager = serviceProvider.GetRequiredService<UserManager<IdentityUser>>();
    var user = await userManager.FindByEmailAsync(email);

    if (user != null)
    {
        if (!await userManager.IsInRoleAsync(user, "Admin"))
        {
            var result = await userManager.AddToRoleAsync(user, "Admin");
            if (result.Succeeded)
            {
                Console.WriteLine($"User '{email}' assigned to 'Admin' role successfully.");
            }
            else
            {
                Console.WriteLine($"Failed to assign 'Admin' role to user '{email}': {string.Join(", ", result.Errors.Select(e => e.Description))}");
            }
        }
    }
    else
    {
        Console.WriteLine($"User with email '{email}' not found.");
    }
}

// Initialization logic using scoped services
using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;

    try
    {
        // Ensure roles exist
        await EnsureRolesExist(services);

        // Assign the "Admin" role to the specified user
        var adminEmail = builder.Configuration["Identity:AdminEmail"] ?? "administrator@gmail.com";
        await AssignAdminRole(services, adminEmail);
    }
    catch (Exception ex)
    {
        Console.WriteLine($"An error occurred during role or user initialization: {ex.Message}");
    }
}

// Configure HTTP request pipeline
if (app.Environment.IsDevelopment())
{
    app.UseMigrationsEndPoint();
}
else
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();

// Map default route and Razor Pages
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");
app.MapRazorPages();

// Run the application
app.Run();