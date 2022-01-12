using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Serene1.Perpustakaan.Forms
{
    [FormScript("Perpustakaan.Pengembalian")]
    [BasedOnRow(typeof(PengembalianRow), CheckNames = true)]
    public class PengembalianForm
    {
        public DateTime TanggalPengembalian { get; set; }
        public Int32 Denda { get; set; }
        [LookupEditor(typeof(BukuRow))]
        public Int32 BukuId { get; set; }
        [LookupEditor(typeof(AnggotaRow))]
        public Int32 AnggotaId { get; set; }
        [LookupEditor(typeof(PetugasRow))]
        public Int32 PetugasId { get; set; }
    }
}