namespace Serene1.Perpustakaan {
    export interface AnggotaRow {
        AnggotaId?: number;
        KodeAnggota?: string;
        NamaAnggota?: string;
        KelasAnggota?: string;
        JurusanAnggota?: string;
        NoTelpAnggota?: string;
        AlamatAnggota?: string;
    }

    export namespace AnggotaRow {
        export const idProperty = 'AnggotaId';
        export const nameProperty = 'KodeAnggota';
        export const localTextPrefix = 'Perpustakaan.Anggota';
        export const lookupKey = 'Perpustakaan.Anggota';

        export function getLookup(): Q.Lookup<AnggotaRow> {
            return Q.getLookup<AnggotaRow>('Perpustakaan.Anggota');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            AnggotaId = "AnggotaId",
            KodeAnggota = "KodeAnggota",
            NamaAnggota = "NamaAnggota",
            KelasAnggota = "KelasAnggota",
            JurusanAnggota = "JurusanAnggota",
            NoTelpAnggota = "NoTelpAnggota",
            AlamatAnggota = "AlamatAnggota"
        }
    }
}
