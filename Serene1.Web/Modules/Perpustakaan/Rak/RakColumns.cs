using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Serene1.Perpustakaan.Columns
{
    [ColumnsScript("Perpustakaan.Rak")]
    [BasedOnRow(typeof(RakRow), CheckNames = true)]
    public class RakColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 RakId { get; set; }
        [EditLink]
        public String NamaRak { get; set; }
    }
}