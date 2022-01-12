using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Serene1.Perpustakaan.PengembalianRow>;
using MyRow = Serene1.Perpustakaan.PengembalianRow;

namespace Serene1.Perpustakaan
{
    public interface IPengembalianRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class PengembalianRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IPengembalianRetrieveHandler
    {
        public PengembalianRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}