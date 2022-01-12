using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace Serene1.Perpustakaan
{
    [ConnectionKey("Perpustakaan"), Module("Perpustakaan"), TableName("peminjaman")]
    [DisplayName("Peminjaman"), InstanceName("Peminjaman")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class PeminjamanRow : Row<PeminjamanRow.RowFields>, IIdRow, IRow, IEntityWithJoins, IEntity, IHaveJoins
    {
        [DisplayName("Peminjaman Id"), Identity, IdProperty]
        public Int32? PeminjamanId
        {
            get => fields.PeminjamanId[this];
            set => fields.PeminjamanId[this] = value;
        }

        [DisplayName("Tanggal Pinjam")]
        public DateTime? TanggalPinjam
        {
            get => fields.TanggalPinjam[this];
            set => fields.TanggalPinjam[this] = value;
        }

        [DisplayName("Tanggal Kembali")]
        public DateTime? TanggalKembali
        {
            get => fields.TanggalKembali[this];
            set => fields.TanggalKembali[this] = value;
        }

        [DisplayName("Buku"), ForeignKey("buku", "BukuId"), LeftJoin("jBuku"), TextualField("BukuKodeBuku")]
        public Int32? BukuId
        {
            get => fields.BukuId[this];
            set => fields.BukuId[this] = value;
        }

        [DisplayName("Anggota"), ForeignKey("anggota", "AnggotaId"), LeftJoin("jAnggota"), TextualField("AnggotaKodeAnggota")]
        public Int32? AnggotaId
        {
            get => fields.AnggotaId[this];
            set => fields.AnggotaId[this] = value;
        }

        [DisplayName("Petugas"), ForeignKey("petugas", "PetugasId"), LeftJoin("jPetugas"), TextualField("PetugasNamaPetugas")]
        public Int32? PetugasId
        {
            get => fields.PetugasId[this];
            set => fields.PetugasId[this] = value;
        }

        [DisplayName("Buku Kode Buku"), Expression("jBuku.[KodeBuku]")]
        [LookupInclude]
        public String BukuKodeBuku
        {
            get => fields.BukuKodeBuku[this];
            set => fields.BukuKodeBuku[this] = value;
        }

        [DisplayName("Buku Nama Buku"), Expression("jBuku.[NamaBuku]")]
        [LookupInclude]
        public String BukuNamaBuku
        {
            get => fields.BukuNamaBuku[this];
            set => fields.BukuNamaBuku[this] = value;
        }

        [DisplayName("Buku Penulis Buku"), Expression("jBuku.[PenulisBuku]")]
        [LookupInclude]
        public String BukuPenulisBuku
        {
            get => fields.BukuPenulisBuku[this];
            set => fields.BukuPenulisBuku[this] = value;
        }

        [DisplayName("Buku Penerbit Buku"), Expression("jBuku.[PenerbitBuku]")]
        [LookupInclude]
        public String BukuPenerbitBuku
        {
            get => fields.BukuPenerbitBuku[this];
            set => fields.BukuPenerbitBuku[this] = value;
        }

        [DisplayName("Buku Tahun Penerbit"), Expression("jBuku.[TahunPenerbit]")]
        [LookupInclude]
        public String BukuTahunPenerbit
        {
            get => fields.BukuTahunPenerbit[this];
            set => fields.BukuTahunPenerbit[this] = value;
        }

        [DisplayName("Buku Stok"), Expression("jBuku.[Stok]")]
        [LookupInclude]
        public Int32? BukuStok
        {
            get => fields.BukuStok[this];
            set => fields.BukuStok[this] = value;
        }

        [DisplayName("Buku Rak Id"), Expression("jBuku.[RakId]")]
        [LookupInclude]
        public Int32? BukuRakId
        {
            get => fields.BukuRakId[this];
            set => fields.BukuRakId[this] = value;
        }

        [DisplayName("Anggota Kode Anggota"), Expression("jAnggota.[KodeAnggota]")]
        [LookupInclude]
        public String AnggotaKodeAnggota
        {
            get => fields.AnggotaKodeAnggota[this];
            set => fields.AnggotaKodeAnggota[this] = value;
        }

        [DisplayName("Anggota Nama Anggota"), Expression("jAnggota.[NamaAnggota]")]
        [LookupInclude]
        public String AnggotaNamaAnggota
        {
            get => fields.AnggotaNamaAnggota[this];
            set => fields.AnggotaNamaAnggota[this] = value;
        }

        [DisplayName("Anggota Kelas Anggota"), Expression("jAnggota.[KelasAnggota]")]
        [LookupInclude]
        public String AnggotaKelasAnggota
        {
            get => fields.AnggotaKelasAnggota[this];
            set => fields.AnggotaKelasAnggota[this] = value;
        }

        [DisplayName("Anggota Jurusan Anggota"), Expression("jAnggota.[JurusanAnggota]")]
        [LookupInclude]
        public String AnggotaJurusanAnggota
        {
            get => fields.AnggotaJurusanAnggota[this];
            set => fields.AnggotaJurusanAnggota[this] = value;
        }

        [DisplayName("Anggota No Telp Anggota"), Expression("jAnggota.[NoTelpAnggota]")]
        [LookupInclude]
        public String AnggotaNoTelpAnggota
        {
            get => fields.AnggotaNoTelpAnggota[this];
            set => fields.AnggotaNoTelpAnggota[this] = value;
        }

        [DisplayName("Anggota Alamat Anggota"), Expression("jAnggota.[AlamatAnggota]")]
        [LookupInclude]
        public String AnggotaAlamatAnggota
        {
            get => fields.AnggotaAlamatAnggota[this];
            set => fields.AnggotaAlamatAnggota[this] = value;
        }

        [DisplayName("Petugas Nama Petugas"), Expression("jPetugas.[NamaPetugas]")]
        [LookupInclude]
        public String PetugasNamaPetugas
        {
            get => fields.PetugasNamaPetugas[this];
            set => fields.PetugasNamaPetugas[this] = value;
        }

        [DisplayName("Petugas No Telp Petugas"), Expression("jPetugas.[NoTelpPetugas]")]
        [LookupInclude]
        public String PetugasNoTelpPetugas
        {
            get => fields.PetugasNoTelpPetugas[this];
            set => fields.PetugasNoTelpPetugas[this] = value;
        }

        [DisplayName("Petugas Alamat Petugas"), Expression("jPetugas.[AlamatPetugas]")]
        [LookupInclude]
        public String PetugasAlamatPetugas
        {
            get => fields.PetugasAlamatPetugas[this];
            set => fields.PetugasAlamatPetugas[this] = value;
        }

        public PeminjamanRow()
            : base()
        {
        }

        public PeminjamanRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field PeminjamanId;
            public DateTimeField TanggalPinjam;
            public DateTimeField TanggalKembali;
            public Int32Field BukuId;
            public Int32Field AnggotaId;
            public Int32Field PetugasId;

            public StringField BukuKodeBuku;
            public StringField BukuNamaBuku;
            public StringField BukuPenulisBuku;
            public StringField BukuPenerbitBuku;
            public StringField BukuTahunPenerbit;
            public Int32Field BukuStok;
            public Int32Field BukuRakId;

            public StringField AnggotaKodeAnggota;
            public StringField AnggotaNamaAnggota;
            public StringField AnggotaKelasAnggota;
            public StringField AnggotaJurusanAnggota;
            public StringField AnggotaNoTelpAnggota;
            public StringField AnggotaAlamatAnggota;

            public StringField PetugasNamaPetugas;
            public StringField PetugasNoTelpPetugas;
            public StringField PetugasAlamatPetugas;
        }
    }
}
