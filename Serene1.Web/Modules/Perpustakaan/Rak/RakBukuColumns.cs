using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Serene1.Perpustakaan.Columns
{
    [ColumnsScript("Perpustakaan.RakBuku")]
    [BasedOnRow(typeof(BukuRow), CheckNames = true)]
    public class RakBukuColumns
    {
        [Width(220)]
        public String NamaBuku { get; set; }
        [Width(220)]
        public String PenulisBuku { get; set; }
        [Width(220)]
        public String PenerbitBuku { get; set; }
        [Width(100)]
        public String TahunPenerbit { get; set; }
    }
}