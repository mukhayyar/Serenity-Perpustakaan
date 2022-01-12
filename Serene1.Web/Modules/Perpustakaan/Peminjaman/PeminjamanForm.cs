using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Serene1.Perpustakaan.Forms
{
    [FormScript("Perpustakaan.Peminjaman")]
    [BasedOnRow(typeof(PeminjamanRow), CheckNames = true)]
    public class PeminjamanForm
    {
        public DateTime TanggalPinjam { get; set; }
        public DateTime TanggalKembali { get; set; }
        [LookupEditor(typeof(BukuRow))]
        public Int32 BukuId { get; set; }
        [LookupEditor(typeof(AnggotaRow))]
        public Int32 AnggotaId { get; set; }
        [LookupEditor(typeof(PetugasRow))]
        public Int32 PetugasId { get; set; }
    }
}