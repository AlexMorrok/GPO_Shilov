using Microsoft.EntityFrameworkCore;
using backend.Models;
using System.Collections.Generic;


namespace backend.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
        {
        }

        public DbSet<Person> Persons { get; set; }
    }
}
