using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Serene1.Perpustakaan.PetugasRow;

namespace Serene1.Perpustakaan
{
    public interface IPetugasDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

    public class PetugasDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IPetugasDeleteHandler
    {
        public PetugasDeleteHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}