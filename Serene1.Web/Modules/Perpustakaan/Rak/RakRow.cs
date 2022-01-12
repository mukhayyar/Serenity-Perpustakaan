using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System;
using System.ComponentModel;
using System.IO;

namespace Serene1.Perpustakaan
{
    [ConnectionKey("Perpustakaan"), Module("Perpustakaan"), TableName("rak")]
    [DisplayName("Rak"), InstanceName("Rak")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript]
    public sealed class RakRow : Row<RakRow.RowFields>, IIdRow, INameRow
    {
        [DisplayName("Rak Id"), Identity, IdProperty]
        public Int32? RakId
        {
            get => fields.RakId[this];
            set => fields.RakId[this] = value;
        }

        [DisplayName("Nama Rak"), Size(100), QuickSearch, NameProperty]
        public String NamaRak
        {
            get => fields.NamaRak[this];
            set => fields.NamaRak[this] = value;
        }

        public RakRow()
            : base()
        {
        }

        public RakRow(RowFields fields)
            : base(fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field RakId;
            public StringField NamaRak;
        }
    }
}
