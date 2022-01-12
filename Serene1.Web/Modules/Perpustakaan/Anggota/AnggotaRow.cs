using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace Serene1.Perpustakaan
{
    [ConnectionKey("Perpustakaan"), Module("Perpustakaan"), TableName("anggota")]
    [DisplayName("Anggota"), InstanceName("Anggota")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class AnggotaRow : Row<AnggotaRow.RowFields>, IIdRow, IRow, IEntityWithJoins, IEntity, IHaveJoins, INameRow
    {
        [DisplayName("Anggota Id"), Identity, IdProperty]
        public Int32? AnggotaId
        {
            get => fields.AnggotaId[this];
            set => fields.AnggotaId[this] = value;
        }

        [DisplayName("Kode Anggota"), Size(9), QuickSearch, NameProperty]
        public String KodeAnggota
        {
            get => fields.KodeAnggota[this];
            set => fields.KodeAnggota[this] = value;
        }

        [DisplayName("Nama Anggota"), Size(100)]
        public String NamaAnggota
        {
            get => fields.NamaAnggota[this];
            set => fields.NamaAnggota[this] = value;
        }

        [DisplayName("Kelas Anggota"), Size(2)]
        public String KelasAnggota
        {
            get => fields.KelasAnggota[this];
            set => fields.KelasAnggota[this] = value;
        }

        [DisplayName("Jurusan Anggota"), Size(5)]
        public String JurusanAnggota
        {
            get => fields.JurusanAnggota[this];
            set => fields.JurusanAnggota[this] = value;
        }

        [DisplayName("No Telp Anggota"), Size(13)]
        public String NoTelpAnggota
        {
            get => fields.NoTelpAnggota[this];
            set => fields.NoTelpAnggota[this] = value;
        }

        [DisplayName("Alamat Anggota"), Size(100)]
        public String AlamatAnggota
        {
            get => fields.AlamatAnggota[this];
            set => fields.AlamatAnggota[this] = value;
        }

        public AnggotaRow()
            : base()
        {
        }

        public AnggotaRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field AnggotaId;
            public StringField KodeAnggota;
            public StringField NamaAnggota;
            public StringField KelasAnggota;
            public StringField JurusanAnggota;
            public StringField NoTelpAnggota;
            public StringField AlamatAnggota;
        }
    }
}
