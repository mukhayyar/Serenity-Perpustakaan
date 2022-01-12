namespace Serene1.Perpustakaan {
    export interface RakForm {
        NamaRak: Serenity.StringEditor;
    }

    export class RakForm extends Serenity.PrefixedContext {
        static formKey = 'Perpustakaan.Rak';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!RakForm.init)  {
                RakForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(RakForm, [
                    'NamaRak', w0
                ]);
            }
        }
    }
}
