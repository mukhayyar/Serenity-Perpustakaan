
namespace Serene1.Perpustakaan {

    @Serenity.Decorators.registerClass()
    export class PengembalianDialog extends Serenity.EntityDialog<PengembalianRow, any> {
        protected getFormKey() { return PengembalianForm.formKey; }
        protected getIdProperty() { return PengembalianRow.idProperty; }
        protected getLocalTextPrefix() { return PengembalianRow.localTextPrefix; }
        protected getService() { return PengembalianService.baseUrl; }
        protected getDeletePermission() { return PengembalianRow.deletePermission; }
        protected getInsertPermission() { return PengembalianRow.insertPermission; }
        protected getUpdatePermission() { return PengembalianRow.updatePermission; }

        protected form = new PengembalianForm(this.idPrefix);

    }
}