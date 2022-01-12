namespace Serene1.Perpustakaan {
    export interface PeminjamanForm {
        TanggalPinjam: Serenity.DateEditor;
        TanggalKembali: Serenity.DateEditor;
        BukuId: Serenity.LookupEditor;
        AnggotaId: Serenity.LookupEditor;
        PetugasId: Serenity.LookupEditor;
    }

    export class PeminjamanForm extends Serenity.PrefixedContext {
        static formKey = 'Perpustakaan.Peminjaman';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PeminjamanForm.init)  {
                PeminjamanForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.LookupEditor;

                Q.initFormType(PeminjamanForm, [
                    'TanggalPinjam', w0,
                    'TanggalKembali', w0,
                    'BukuId', w1,
                    'AnggotaId', w1,
                    'PetugasId', w1
                ]);
            }
        }
    }
}
