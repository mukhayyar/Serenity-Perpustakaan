using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Serene1.Perpustakaan.Forms
{
    [FormScript("Perpustakaan.Anggota")]
    [BasedOnRow(typeof(AnggotaRow), CheckNames = true)]
    public class AnggotaForm
    {
        public String KodeAnggota { get; set; }
        public String NamaAnggota { get; set; }
        public String KelasAnggota { get; set; }
        public String JurusanAnggota { get; set; }
        public String NoTelpAnggota { get; set; }
        public String AlamatAnggota { get; set; }
    }
}