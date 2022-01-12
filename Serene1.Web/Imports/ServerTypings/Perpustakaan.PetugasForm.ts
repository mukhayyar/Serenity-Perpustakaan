namespace Serene1.Perpustakaan {
    export interface PetugasForm {
        NamaPetugas: Serenity.StringEditor;
        NoTelpPetugas: Serenity.StringEditor;
        AlamatPetugas: Serenity.StringEditor;
    }

    export class PetugasForm extends Serenity.PrefixedContext {
        static formKey = 'Perpustakaan.Petugas';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PetugasForm.init)  {
                PetugasForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(PetugasForm, [
                    'NamaPetugas', w0,
                    'NoTelpPetugas', w0,
                    'AlamatPetugas', w0
                ]);
            }
        }
    }
}
