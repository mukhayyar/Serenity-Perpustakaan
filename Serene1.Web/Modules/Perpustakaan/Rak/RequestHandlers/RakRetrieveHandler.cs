using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Serene1.Perpustakaan.RakRow>;
using MyRow = Serene1.Perpustakaan.RakRow;

namespace Serene1.Perpustakaan
{
    public interface IRakRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class RakRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IRakRetrieveHandler
    {
        public RakRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}