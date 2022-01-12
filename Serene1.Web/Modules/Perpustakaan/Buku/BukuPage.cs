using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Serene1.Perpustakaan.Pages
{

    [PageAuthorize(typeof(BukuRow))]
    public class BukuController : Controller
    {
        [Route("Perpustakaan/Buku")]
        public ActionResult Index()
        {
            return View("~/Modules/Perpustakaan/Buku/BukuIndex.cshtml");
        }
    }
}