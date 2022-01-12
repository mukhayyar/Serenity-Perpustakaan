using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Serene1.Perpustakaan.Columns
{
    [ColumnsScript("Perpustakaan.Anggota")]
    [BasedOnRow(typeof(AnggotaRow), CheckNames = true)]
    public class AnggotaColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 AnggotaId { get; set; }
        [EditLink]
        public String KodeAnggota { get; set; }
        public String NamaAnggota { get; set; }
        public String KelasAnggota { get; set; }
        public String JurusanAnggota { get; set; }
        public String NoTelpAnggota { get; set; }
        public String AlamatAnggota { get; set; }
    }
}