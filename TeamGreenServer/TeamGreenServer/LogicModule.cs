using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.IO;
using System.Threading.Tasks;
using Owin.Types;
using Newtonsoft.Json;

using AppFunc = System.Func<System.Collections.Generic.IDictionary<string, object>, System.Threading.Tasks.Task>;

namespace TeamGreenApp
{
    class LogicModule
    {
        private readonly AppFunc next;

        public LogicModule(AppFunc next)
        {
            if (next == null)
                throw new ArgumentNullException("next");

            this.next = next;
        }

        public Task Invoke(IDictionary<string, object> env)
        {
            try
            {
                var request = new OwinRequest(env);
                var path = request.Path.TrimEnd(new[] { '/' });

                //debug
                //Console.WriteLine(request.QueryString);

                //// Main page
                if (path.Equals("", StringComparison.OrdinalIgnoreCase))
                {
                    var response = new OwinResponse(env);

                    //обработка запросов
                    /*if (request.QueryString.Equals("name=admin&password=admin", StringComparison.OrdinalIgnoreCase))
                    {
                        response.ContentType = "text/html; charset=utf-8";
                        return response.WriteAsync("<script>location.replace(\"/grid\");</script>");
                    }*/

                    response.ContentType = "text/html; charset=utf-8";
                    return response.WriteAsync(ReadHtmlFile("index"));
                }

                //// Grid page
                /*if (path.Equals("/grid", StringComparison.OrdinalIgnoreCase))
                {
                    var response = new OwinResponse(env);

                    //обработка запросов
                    if (request.QueryString.Equals("loadjson=", StringComparison.OrdinalIgnoreCase))
                    {
                        //парсинг json файла
                        using (StreamReader reader = new StreamReader("LeadsData.json"))
                        {
                            string jsonFile = reader.ReadToEnd();
                            var deserializedPerson = JsonConvert.DeserializeObject<List<Person>>(jsonFile);

                        }
                    }

                    response.ContentType = "text/html; charset=utf-8";
                    return response.WriteAsync(ReadHtmlFile("grid"));
                }*/
            }
            catch (Exception ex)
            {
                var tcs = new TaskCompletionSource<object>();
                tcs.SetException(ex);
                return tcs.Task;
            }

            return this.next(env);
        }

        public string ReadHtmlFile(string filename)
        {
            string path = filename + ".html";

            try
            {
                using (StreamReader reader = new StreamReader(path))
                {
                    return reader.ReadToEnd();
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                return "<h1>Error 404: Page not faund!</h1>";
            }
        }
    }

    public class Person
    {
        public string ID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Title { get; set; }
        public string BirthDay { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string Postal { get; set; }
        public string Country { get; set; }
        public string Company { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string Gender { get; set; }
        public string[] Industry { get; set; }
        public string WinChance { get; set; }
        public bool IsActive { get; set; }
        public string Amount { get; set; }
        public string Currency { get; set; }
    }
}