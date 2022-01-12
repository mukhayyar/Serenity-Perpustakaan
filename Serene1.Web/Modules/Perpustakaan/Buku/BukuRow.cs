using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace Serene1.Perpustakaan
{
    [ConnectionKey("Perpustakaan"), Module("Perpustakaan"), TableName("buku")]
    [DisplayName("Buku"), InstanceName("Buku")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class BukuRow : Row<BukuRow.RowFields>, IIdRow, IRow, IEntityWithJoins, IEntity, IHaveJoins, INameRow
    {
        [DisplayName("Buku Id"), Identity, IdProperty]
        public Int32? BukuId
        {
            get => fields.BukuId[this];
            set => fields.BukuId[this] = value;
        }

        [DisplayName("Kode Buku"), Size(5), NotNull, QuickSearch, NameProperty]
        public String KodeBuku
        {
            get => fields.KodeBuku[this];
            set => fields.KodeBuku[this] = value;
        }

        [DisplayName("Nama Buku"), Size(255)]
        public String NamaBuku
        {
            get => fields.NamaBuku[this];
            set => fields.NamaBuku[this] = value;
        }

        [DisplayName("Penulis Buku"), Size(255)]
        public String PenulisBuku
        {
            get => fields.PenulisBuku[this];
            set => fields.PenulisBuku[this] = value;
        }

        [DisplayName("Penerbit Buku"), Size(255)]
        public String PenerbitBuku
        {
            get => fields.PenerbitBuku[this];
            set => fields.PenerbitBuku[this] = value;
        }

        [DisplayName("Tahun Penerbit"), Size(4)]
        public String TahunPenerbit
        {
            get => fields.TahunPenerbit[this];
            set => fields.TahunPenerbit[this] = value;
        }

        [DisplayName("Stok")]
        [LookupInclude]
        public Int32? Stok
        {
            get => fields.Stok[this];
            set => fields.Stok[this] = value;
        }

        [DisplayName("Rak"), NotNull, ForeignKey("rak", "RakId"), LeftJoin("jRak"), TextualField("RakNamaRak")]
        public Int32? RakId
        {
            get => fields.RakId[this];
            set => fields.RakId[this] = value;
        }

        [DisplayName("Nama Rak"), Expression("jRak.[NamaRak]")]
        [LookupInclude]
        public String RakNamaRak
        {
            get => fields.RakNamaRak[this];
            set => fields.RakNamaRak[this] = value;
        }

        public BukuRow()
            : base()
        {
        }

        public BukuRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field BukuId;
            public StringField KodeBuku;
            public StringField NamaBuku;
            public StringField PenulisBuku;
            public StringField PenerbitBuku;
            public StringField TahunPenerbit;
            public Int32Field Stok;
            public Int32Field RakId;

            public StringField RakNamaRak;
        }
    }
}
