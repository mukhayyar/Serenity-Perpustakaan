namespace Serene1.Perpustakaan {
    export interface PetugasRow {
        PetugasId?: number;
        NamaPetugas?: string;
        NoTelpPetugas?: string;
        AlamatPetugas?: string;
    }

    export namespace PetugasRow {
        export const idProperty = 'PetugasId';
        export const nameProperty = 'NamaPetugas';
        export const localTextPrefix = 'Perpustakaan.Petugas';
        export const lookupKey = 'Perpustakaan.Petugas';

        export function getLookup(): Q.Lookup<PetugasRow> {
            return Q.getLookup<PetugasRow>('Perpustakaan.Petugas');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            PetugasId = "PetugasId",
            NamaPetugas = "NamaPetugas",
            NoTelpPetugas = "NoTelpPetugas",
            AlamatPetugas = "AlamatPetugas"
        }
    }
}
