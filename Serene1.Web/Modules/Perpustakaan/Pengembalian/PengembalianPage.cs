using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Serene1.Perpustakaan.Pages
{

    [PageAuthorize(typeof(PengembalianRow))]
    public class PengembalianController : Controller
    {
        [Route("Perpustakaan/Pengembalian")]
        public ActionResult Index()
        {
            return View("~/Modules/Perpustakaan/Pengembalian/PengembalianIndex.cshtml");
        }
    }
}