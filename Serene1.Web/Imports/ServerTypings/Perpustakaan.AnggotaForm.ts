namespace Serene1.Perpustakaan {
    export interface AnggotaForm {
        KodeAnggota: Serenity.StringEditor;
        NamaAnggota: Serenity.StringEditor;
        KelasAnggota: Serenity.StringEditor;
        JurusanAnggota: Serenity.StringEditor;
        NoTelpAnggota: Serenity.StringEditor;
        AlamatAnggota: Serenity.StringEditor;
    }

    export class AnggotaForm extends Serenity.PrefixedContext {
        static formKey = 'Perpustakaan.Anggota';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AnggotaForm.init)  {
                AnggotaForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(AnggotaForm, [
                    'KodeAnggota', w0,
                    'NamaAnggota', w0,
                    'KelasAnggota', w0,
                    'JurusanAnggota', w0,
                    'NoTelpAnggota', w0,
                    'AlamatAnggota', w0
                ]);
            }
        }
    }
}
