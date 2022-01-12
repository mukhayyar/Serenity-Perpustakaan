namespace Serene1.Perpustakaan {
    export interface PengembalianForm {
        TanggalPengembalian: Serenity.DateEditor;
        Denda: Serenity.IntegerEditor;
        BukuId: Serenity.LookupEditor;
        AnggotaId: Serenity.LookupEditor;
        PetugasId: Serenity.LookupEditor;
    }

    export class PengembalianForm extends Serenity.PrefixedContext {
        static formKey = 'Perpustakaan.Pengembalian';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PengembalianForm.init)  {
                PengembalianForm.init = true;

                var s = Serenity;
                var w0 = s.DateEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.LookupEditor;

                Q.initFormType(PengembalianForm, [
                    'TanggalPengembalian', w0,
                    'Denda', w1,
                    'BukuId', w2,
                    'AnggotaId', w2,
                    'PetugasId', w2
                ]);
            }
        }
    }
}
