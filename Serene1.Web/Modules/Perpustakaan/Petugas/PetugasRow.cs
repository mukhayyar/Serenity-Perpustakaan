using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace Serene1.Perpustakaan
{
    [ConnectionKey("Perpustakaan"), Module("Perpustakaan"), TableName("petugas")]
    [DisplayName("Petugas"), InstanceName("Petugas")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]

    public sealed class PetugasRow : Row<PetugasRow.RowFields>, IIdRow, IRow, IEntityWithJoins, IEntity, IHaveJoins, INameRow
    {
        [DisplayName("Petugas Id"), Identity, IdProperty]
        public Int32? PetugasId
        {
            get => fields.PetugasId[this];
            set => fields.PetugasId[this] = value;
        }

        [DisplayName("Nama Petugas"), Size(100), QuickSearch, NameProperty]
        public String NamaPetugas
        {
            get => fields.NamaPetugas[this];
            set => fields.NamaPetugas[this] = value;
        }

        [DisplayName("No Telp Petugas"), Size(13)]
        public String NoTelpPetugas
        {
            get => fields.NoTelpPetugas[this];
            set => fields.NoTelpPetugas[this] = value;
        }

        [DisplayName("Alamat Petugas"), Size(100)]
        public String AlamatPetugas
        {
            get => fields.AlamatPetugas[this];
            set => fields.AlamatPetugas[this] = value;
        }

        public PetugasRow()
            : base()
        {
        }

        public PetugasRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field PetugasId;
            public StringField NamaPetugas;
            public StringField NoTelpPetugas;
            public StringField AlamatPetugas;
        }
    }
}
