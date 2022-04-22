using System.ComponentModel.DataAnnotations;
namespace TeaApp.Models;

    public class Tea
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public TeaType Type { get; set; }
        [Required]
        public string ImgUrl { get; set; }
        [Required]
        public Boolean IsOutOfStock { get; set; }
        [Required]
        public string Origin { get; set; }
        [Required]
        public int AmountInStock { get; set; }
        [Required]
        public int BrewTime { get; set; }
        [Required]
        public int Temperature { get; set; }
        

        public enum TeaType
        {
            Mountain, Desert, Forest
        }


    }

