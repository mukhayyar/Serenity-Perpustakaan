using Serenity;
using Serenity.Web;
using Microsoft.AspNetCore.Mvc;

namespace Serene1.Perpustakaan.Pages
{

    [PageAuthorize(typeof(PetugasRow))]
    public class PetugasController : Controller
    {
        [Route("Perpustakaan/Petugas")]
        public ActionResult Index()
        {
            return View("~/Modules/Perpustakaan/Petugas/PetugasIndex.cshtml");
        }
    }
}