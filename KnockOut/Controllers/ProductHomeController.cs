using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace KnockOut.Controllers
{
    public class ProductHomeController : Controller
    {
        // GET: ProductHome
        public ActionResult Index(string ProductCode)
        {
            ViewBag.Message = ProductCode;
            return View();
        }
    }
}