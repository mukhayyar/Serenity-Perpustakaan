namespace Serene1.Perpustakaan {
    export interface BukuForm {
        KodeBuku: Serenity.StringEditor;
        NamaBuku: Serenity.StringEditor;
        PenulisBuku: Serenity.StringEditor;
        PenerbitBuku: Serenity.StringEditor;
        TahunPenerbit: Serenity.StringEditor;
        Stok: Serenity.IntegerEditor;
        RakId: Serenity.LookupEditor;
    }

    export class BukuForm extends Serenity.PrefixedContext {
        static formKey = 'Perpustakaan.Buku';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!BukuForm.init)  {
                BukuForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.LookupEditor;

                Q.initFormType(BukuForm, [
                    'KodeBuku', w0,
                    'NamaBuku', w0,
                    'PenulisBuku', w0,
                    'PenerbitBuku', w0,
                    'TahunPenerbit', w0,
                    'Stok', w1,
                    'RakId', w2
                ]);
            }
        }
    }
}
