
namespace Serene1.Perpustakaan {

    @Serenity.Decorators.registerClass()
    export class AnggotaDialog extends Serenity.EntityDialog<AnggotaRow, any> {
        protected getFormKey() { return AnggotaForm.formKey; }
        protected getIdProperty() { return AnggotaRow.idProperty; }
        protected getLocalTextPrefix() { return AnggotaRow.localTextPrefix; }
        protected getNameProperty() { return AnggotaRow.nameProperty; }
        protected getService() { return AnggotaService.baseUrl; }
        protected getDeletePermission() { return AnggotaRow.deletePermission; }
        protected getInsertPermission() { return AnggotaRow.insertPermission; }
        protected getUpdatePermission() { return AnggotaRow.updatePermission; }

        protected form = new AnggotaForm(this.idPrefix);

    }
}