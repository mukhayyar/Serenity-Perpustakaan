
namespace Serene1.Perpustakaan {

    @Serenity.Decorators.registerClass()
    export class PeminjamanDialog extends Serenity.EntityDialog<PeminjamanRow, any> {
        protected getFormKey() { return PeminjamanForm.formKey; }
        protected getIdProperty() { return PeminjamanRow.idProperty; }
        protected getLocalTextPrefix() { return PeminjamanRow.localTextPrefix; }
        protected getService() { return PeminjamanService.baseUrl; }
        protected getDeletePermission() { return PeminjamanRow.deletePermission; }
        protected getInsertPermission() { return PeminjamanRow.insertPermission; }
        protected getUpdatePermission() { return PeminjamanRow.updatePermission; }

        protected form = new PeminjamanForm(this.idPrefix);

    }
}