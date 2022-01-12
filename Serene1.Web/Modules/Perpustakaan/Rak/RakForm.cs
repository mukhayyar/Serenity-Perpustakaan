using Serenity;
using Serenity.ComponentModel;
using Serenity.Data;
using System;
using System.ComponentModel;
using System.Collections.Generic;
using System.IO;

namespace Serene1.Perpustakaan.Forms
{
    [FormScript("Perpustakaan.Rak")]
    [BasedOnRow(typeof(RakRow), CheckNames = true)]
    public class RakForm
    {
        public String NamaRak { get; set; }
    }
}