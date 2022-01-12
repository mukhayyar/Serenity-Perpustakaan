using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Serene1.Perpustakaan.Columns
{
    [ColumnsScript("Perpustakaan.Pengembalian")]
    [BasedOnRow(typeof(PengembalianRow), CheckNames = true)]
    public class PengembalianColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 PengembalianId { get; set; }
        public DateTime TanggalPengembalian { get; set; }
        public Int32 Denda { get; set; }
        [EditLink(ItemType = "Serene1.Perpustakaan.Buku", IdField = "BukuId")]
        [Width(150)]
		[LookupEditor(typeof(BukuRow))]
		[QuickFilter(true)]
        public String BukuNamaBuku { get; set; }
        [EditLink(ItemType = "Serene1.Perpustakaan.Anggota", IdField = "AnggotaId")]
        [Width(150)]
		[LookupEditor(typeof(AnggotaRow))]
		[QuickFilter(true)]
        public String AnggotaNamaAnggota { get; set; }
        [EditLink(ItemType = "Serene1.Perpustakaan.Petugas", IdField = "PetugasId")]
        [Width(150)]
		[LookupEditor(typeof(PetugasRow))]
		[QuickFilter(true)]
        public String PetugasNamaPetugas { get; set; }
    }
}