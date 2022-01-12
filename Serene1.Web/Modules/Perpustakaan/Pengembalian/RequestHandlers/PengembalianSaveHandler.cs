using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Serene1.Perpustakaan.PengembalianRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Serene1.Perpustakaan.PengembalianRow;

namespace Serene1.Perpustakaan
{
    public interface IPengembalianSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class PengembalianSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IPengembalianSaveHandler
    {
        public PengembalianSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}