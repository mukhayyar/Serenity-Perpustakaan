using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.SaveRequest<Serene1.Perpustakaan.AnggotaRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Serene1.Perpustakaan.AnggotaRow;

namespace Serene1.Perpustakaan
{
    public interface IAnggotaSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class AnggotaSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IAnggotaSaveHandler
    {
        public AnggotaSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}