using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Serene1.Perpustakaan.AnggotaRow;

namespace Serene1.Perpustakaan
{
    public interface IAnggotaDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class AnggotaDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IAnggotaDeleteHandler
    {
        public AnggotaDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}