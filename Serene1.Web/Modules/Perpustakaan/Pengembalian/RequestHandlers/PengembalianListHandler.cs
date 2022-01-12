using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Serene1.Perpustakaan.PengembalianRow>;
using MyRow = Serene1.Perpustakaan.PengembalianRow;

namespace Serene1.Perpustakaan
{
    public interface IPengembalianListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class PengembalianListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IPengembalianListHandler
    {
        public PengembalianListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}