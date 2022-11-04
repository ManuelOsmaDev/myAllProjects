using System;

namespace ConsoleApp
{
    class Program
    {
        static void Main(string[] args)
        {
            var names = new List<string> { "<name>", "Ana", "Felipe" };
            names.Add("Manuel");
            names.Add("Bill");
            names.Sort();
            names.Remove("Felipe");
            foreach (var name in names)
            {
                Console.WriteLine(name);
            }
            // Console.WriteLine(names[1]);

            // var index  = names.IndexOf("Manuel");

            // Console.WriteLine($"found manuel at {index}");

        }
    }
}
