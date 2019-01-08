using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;
using Owin;

namespace TeamGreenApp
{
    /*при запуске веб приложения Katana ищет класс Startup
     * и вызывает его метод Configuration(), для создания
     * и конфигурирования конвеера обработки сообщений.*/
    class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.Use(typeof(LogicModule));

            HttpConfiguration config = new HttpConfiguration();
            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "{controller}"
                //defaults: new { id = RouteParameter.Optional }
                );
            app.UseWebApi(config);
        }
    }
}
