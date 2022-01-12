namespace Serene1.Perpustakaan {
    export namespace PengembalianService {
        export const baseUrl = 'Perpustakaan/Pengembalian';

        export declare function Create(request: Serenity.SaveRequest<PengembalianRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<PengembalianRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<PengembalianRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<PengembalianRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Perpustakaan/Pengembalian/Create",
            Update = "Perpustakaan/Pengembalian/Update",
            Delete = "Perpustakaan/Pengembalian/Delete",
            Retrieve = "Perpustakaan/Pengembalian/Retrieve",
            List = "Perpustakaan/Pengembalian/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>PengembalianService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}
