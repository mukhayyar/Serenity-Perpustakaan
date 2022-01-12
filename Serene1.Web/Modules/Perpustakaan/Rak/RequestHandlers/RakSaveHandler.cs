using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Serene1.Perpustakaan.RakRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Serene1.Perpustakaan.RakRow;

namespace Serene1.Perpustakaan
{
    public interface IRakSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class RakSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IRakSaveHandler
    {
        public RakSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}