using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Serene1.Perpustakaan.Forms
{
    [FormScript("Perpustakaan.Petugas")]
    [BasedOnRow(typeof(PetugasRow), CheckNames = true)]
    public class PetugasForm
    {
        public String NamaPetugas { get; set; }
        public String NoTelpPetugas { get; set; }
        public String AlamatPetugas { get; set; }
    }
}