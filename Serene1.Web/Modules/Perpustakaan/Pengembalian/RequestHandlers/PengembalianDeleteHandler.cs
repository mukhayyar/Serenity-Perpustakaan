using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Serene1.Perpustakaan.PengembalianRow;

namespace Serene1.Perpustakaan
{
    public interface IPengembalianDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class PengembalianDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IPengembalianDeleteHandler
    {
        public PengembalianDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}