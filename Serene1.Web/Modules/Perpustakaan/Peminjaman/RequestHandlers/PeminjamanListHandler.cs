using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Serene1.Perpustakaan.PeminjamanRow>;
using MyRow = Serene1.Perpustakaan.PeminjamanRow;

namespace Serene1.Perpustakaan
{
    public interface IPeminjamanListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class PeminjamanListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IPeminjamanListHandler
    {
        public PeminjamanListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}