using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Serene1.Perpustakaan.Columns
{
    [ColumnsScript("Perpustakaan.Buku")]
    [BasedOnRow(typeof(BukuRow), CheckNames = true)]
    public class BukuColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 BukuId { get; set; }
        [EditLink]
        public String KodeBuku { get; set; }
        public String NamaBuku { get; set; }
        public String PenulisBuku { get; set; }
        public String PenerbitBuku { get; set; }
        public String TahunPenerbit { get; set; }
        public Int32 Stok { get; set; }
        [Width(150)]
		[LookupEditor(typeof(RakRow))]
		[QuickFilter(true)]
        public String RakNamaRak { get; set; }
    }
}