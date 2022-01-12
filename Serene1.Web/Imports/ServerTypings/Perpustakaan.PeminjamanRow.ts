namespace Serene1.Perpustakaan {
    export interface PeminjamanRow {
        PeminjamanId?: number;
        TanggalPinjam?: string;
        TanggalKembali?: string;
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

    export namespace PeminjamanRow {
        export const idProperty = 'PeminjamanId';
        export const localTextPrefix = 'Perpustakaan.Peminjaman';
        export const lookupKey = 'Perpustakaan.Peminjaman';

        export function getLookup(): Q.Lookup<PeminjamanRow> {
            return Q.getLookup<PeminjamanRow>('Perpustakaan.Peminjaman');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            PeminjamanId = "PeminjamanId",
            TanggalPinjam = "TanggalPinjam",
            TanggalKembali = "TanggalKembali",
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
