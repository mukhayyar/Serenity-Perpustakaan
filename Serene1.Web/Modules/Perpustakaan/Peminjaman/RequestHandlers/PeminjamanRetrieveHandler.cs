using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Serene1.Perpustakaan.PeminjamanRow>;
using MyRow = Serene1.Perpustakaan.PeminjamanRow;

namespace Serene1.Perpustakaan
{
    public interface IPeminjamanRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class PeminjamanRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IPeminjamanRetrieveHandler
    {
        public PeminjamanRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}