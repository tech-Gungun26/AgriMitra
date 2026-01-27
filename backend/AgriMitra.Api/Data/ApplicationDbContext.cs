using Microsoft.EntityFrameworkCore;
using AgriMitra.Api.Models;

namespace AgriMitra.Api.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
    }
}
