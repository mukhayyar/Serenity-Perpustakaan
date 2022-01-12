namespace Serene1.Perpustakaan {
    export namespace PeminjamanService {
        export const baseUrl = 'Perpustakaan/Peminjaman';

        export declare function Create(request: Serenity.SaveRequest<PeminjamanRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<PeminjamanRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PeminjamanRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PeminjamanRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Perpustakaan/Peminjaman/Create",
            Update = "Perpustakaan/Peminjaman/Update",
            Delete = "Perpustakaan/Peminjaman/Delete",
            Retrieve = "Perpustakaan/Peminjaman/Retrieve",
            List = "Perpustakaan/Peminjaman/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>PeminjamanService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
