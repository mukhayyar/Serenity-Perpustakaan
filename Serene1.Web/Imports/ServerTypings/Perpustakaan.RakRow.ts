namespace Serene1.Perpustakaan {
    export interface RakRow {
        RakId?: number;
        NamaRak?: string;
    }

    export namespace RakRow {
        export const idProperty = 'RakId';
        export const nameProperty = 'NamaRak';
        export const localTextPrefix = 'Perpustakaan.Rak';
        export const lookupKey = 'Perpustakaan.Rak';

        export function getLookup(): Q.Lookup<RakRow> {
            return Q.getLookup<RakRow>('Perpustakaan.Rak');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            RakId = "RakId",
            NamaRak = "NamaRak"
        }
    }
}
