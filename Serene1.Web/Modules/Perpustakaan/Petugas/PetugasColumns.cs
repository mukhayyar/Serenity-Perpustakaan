using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Serene1.Perpustakaan.Columns
{
    [ColumnsScript("Perpustakaan.Petugas")]
    [BasedOnRow(typeof(PetugasRow), CheckNames = true)]
    public class PetugasColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 PetugasId { get; set; }
        [EditLink]
        public String NamaPetugas { get; set; }
        public String NoTelpPetugas { get; set; }
        public String AlamatPetugas { get; set; }
    }
}