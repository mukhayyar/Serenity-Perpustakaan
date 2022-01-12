using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Serene1.Perpustakaan.BukuRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Serene1.Perpustakaan.BukuRow;

namespace Serene1.Perpustakaan
{
    public interface IBukuSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class BukuSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IBukuSaveHandler
    {
        public BukuSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}