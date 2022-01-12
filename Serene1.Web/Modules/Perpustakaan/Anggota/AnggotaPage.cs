using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Serene1.Perpustakaan.Pages
{

    [PageAuthorize(typeof(AnggotaRow))]
    public class AnggotaController : Controller
    {
        [Route("Perpustakaan/Anggota")]
        public ActionResult Index()
        {
            return View("~/Modules/Perpustakaan/Anggota/AnggotaIndex.cshtml");
        }
    }
}