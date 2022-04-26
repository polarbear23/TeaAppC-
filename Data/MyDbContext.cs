using Microsoft.EntityFrameworkCore;
using TeaApp.Models;

namespace TeaApp.Data;

public class MyDbContext :DbContext
{
    public MyDbContext(DbContextOptions<MyDbContext> options): base(options){}
    public DbSet<Tea> Teas {get; set;}

}
