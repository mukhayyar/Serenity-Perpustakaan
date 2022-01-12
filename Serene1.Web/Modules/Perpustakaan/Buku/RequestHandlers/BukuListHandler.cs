using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Serene1.Perpustakaan.BukuRow>;
using MyRow = Serene1.Perpustakaan.BukuRow;

namespace Serene1.Perpustakaan
{
    public interface IBukuListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class BukuListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IBukuListHandler
    {
        public BukuListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}