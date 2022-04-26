using Newtonsoft.Json;
using TeaApp.Models;
namespace TeaApp.Data;
    public class DataSeeder
    {  
        public static async Task Seed(MyDbContext context)
        {
            if (!context.Teas.Any())
            {
            string teasJSON = System.IO.File.ReadAllText("teas.json");
            List<Tea> teaList = JsonConvert.DeserializeObject<List<Tea>>(teasJSON);
            await context.Teas.AddRangeAsync(teaList);
            await context.SaveChangesAsync();
            }
        }
    }


// checks if teas is empty then if empty fills with tea data read from teas.json