using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Net.Http;
using Owin;
using Microsoft.Owin.Hosting;

namespace TeamGreenApp
{
    class Program
    {
        static void Main(string[] args)
        {
            string address = "http://localhost:8000/";

            //start host
            using (Microsoft.Owin.Hosting.WebApp.Start<Startup>(url: address))
            {
                //виртуальный запрос
                /*HttpClient client = new HttpClient();
                var responce = client.GetAsync(address + "numbers").Result;
                Console.WriteLine(responce);
                Console.WriteLine(responce.Content.ReadAsStringAsync().Result);*/

                Console.WriteLine("Server started. Press any button for close server...");
                Console.ReadLine();
            }
            Console.WriteLine("Server stopped.");
        }
    }
}