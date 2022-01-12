using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Serene1.Perpustakaan.PetugasRow>;
using MyRow = Serene1.Perpustakaan.PetugasRow;

namespace Serene1.Perpustakaan
{
    public interface IPetugasListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

    public class PetugasListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IPetugasListHandler
    {
        public PetugasListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}