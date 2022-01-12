namespace Serene1.Perpustakaan {
    export interface PengembalianRow {
        PengembalianId?: number;
        TanggalPengembalian?: string;
        Denda?: number;
        BukuId?: number;
        AnggotaId?: number;
        PetugasId?: number;
        BukuKodeBuku?: string;
        BukuNamaBuku?: string;
        BukuPenulisBuku?: string;
        BukuPenerbitBuku?: string;
        BukuTahunPenerbit?: string;
        BukuStok?: number;
        BukuRakId?: number;
        AnggotaKodeAnggota?: string;
        AnggotaNamaAnggota?: string;
        AnggotaKelasAnggota?: string;
        AnggotaJurusanAnggota?: string;
        AnggotaNoTelpAnggota?: string;
        AnggotaAlamatAnggota?: string;
        PetugasNamaPetugas?: string;
        PetugasNoTelpPetugas?: string;
        PetugasAlamatPetugas?: string;
    }

    export namespace PengembalianRow {
        export const idProperty = 'PengembalianId';
        export const localTextPrefix = 'Perpustakaan.Pengembalian';
        export const lookupKey = 'Perpustakaan.Pengembalian';

        export function getLookup(): Q.Lookup<PengembalianRow> {
            return Q.getLookup<PengembalianRow>('Perpustakaan.Pengembalian');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            PengembalianId = "PengembalianId",
            TanggalPengembalian = "TanggalPengembalian",
            Denda = "Denda",
            BukuId = "BukuId",
            AnggotaId = "AnggotaId",
            PetugasId = "PetugasId",
            BukuKodeBuku = "BukuKodeBuku",
            BukuNamaBuku = "BukuNamaBuku",
            BukuPenulisBuku = "BukuPenulisBuku",
            BukuPenerbitBuku = "BukuPenerbitBuku",
            BukuTahunPenerbit = "BukuTahunPenerbit",
            BukuStok = "BukuStok",
            BukuRakId = "BukuRakId",
            AnggotaKodeAnggota = "AnggotaKodeAnggota",
            AnggotaNamaAnggota = "AnggotaNamaAnggota",
            AnggotaKelasAnggota = "AnggotaKelasAnggota",
            AnggotaJurusanAnggota = "AnggotaJurusanAnggota",
            AnggotaNoTelpAnggota = "AnggotaNoTelpAnggota",
            AnggotaAlamatAnggota = "AnggotaAlamatAnggota",
            PetugasNamaPetugas = "PetugasNamaPetugas",
            PetugasNoTelpPetugas = "PetugasNoTelpPetugas",
            PetugasAlamatPetugas = "PetugasAlamatPetugas"
        }
    }
}
