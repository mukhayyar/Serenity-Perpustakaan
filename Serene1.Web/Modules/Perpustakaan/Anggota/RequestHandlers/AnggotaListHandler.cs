using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Serene1.Perpustakaan.AnggotaRow>;
using MyRow = Serene1.Perpustakaan.AnggotaRow;

namespace Serene1.Perpustakaan
{
    public interface IAnggotaListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class AnggotaListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IAnggotaListHandler
    {
        public AnggotaListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}