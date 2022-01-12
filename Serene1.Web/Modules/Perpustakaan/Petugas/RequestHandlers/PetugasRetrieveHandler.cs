using Serenity;
using Serenity.Data;
using Serenity.Services;
using System;
using System.Data;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<Serene1.Perpustakaan.PetugasRow>;
using MyRow = Serene1.Perpustakaan.PetugasRow;

namespace Serene1.Perpustakaan
{
    public interface IPetugasRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> {}

    public class PetugasRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IPetugasRetrieveHandler
    {
        public PetugasRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}