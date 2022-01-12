using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Serene1.Perpustakaan.PeminjamanRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Serene1.Perpustakaan.PeminjamanRow;

namespace Serene1.Perpustakaan
{
    public interface IPeminjamanSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class PeminjamanSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IPeminjamanSaveHandler
    {
        public PeminjamanSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}