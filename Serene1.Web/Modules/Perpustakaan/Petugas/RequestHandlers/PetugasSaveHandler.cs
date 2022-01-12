using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Serene1.Perpustakaan.PetugasRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Serene1.Perpustakaan.PetugasRow;

namespace Serene1.Perpustakaan
{
    public interface IPetugasSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class PetugasSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IPetugasSaveHandler
    {
        public PetugasSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}