namespace Serene1.Perpustakaan {
    export interface BukuRow {
        BukuId?: number;
        KodeBuku?: string;
        NamaBuku?: string;
        PenulisBuku?: string;
        PenerbitBuku?: string;
        TahunPenerbit?: string;
        Stok?: number;
        RakId?: number;
        RakNamaRak?: string;
    }

    export namespace BukuRow {
        export const idProperty = 'BukuId';
        export const nameProperty = 'KodeBuku';
        export const localTextPrefix = 'Perpustakaan.Buku';
        export const lookupKey = 'Perpustakaan.Buku';

        export function getLookup(): Q.Lookup<BukuRow> {
            return Q.getLookup<BukuRow>('Perpustakaan.Buku');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            BukuId = "BukuId",
            KodeBuku = "KodeBuku",
            NamaBuku = "NamaBuku",
            PenulisBuku = "PenulisBuku",
            PenerbitBuku = "PenerbitBuku",
            TahunPenerbit = "TahunPenerbit",
            Stok = "Stok",
            RakId = "RakId",
            RakNamaRak = "RakNamaRak"
        }
    }
}
