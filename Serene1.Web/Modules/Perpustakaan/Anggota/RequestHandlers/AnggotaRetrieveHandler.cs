using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Serene1.Perpustakaan.AnggotaRow>;
using MyRow = Serene1.Perpustakaan.AnggotaRow;

namespace Serene1.Perpustakaan
{
    public interface IAnggotaRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class AnggotaRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IAnggotaRetrieveHandler
    {
        public AnggotaRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}