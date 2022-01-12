
namespace Serene1.Perpustakaan {

    @Serenity.Decorators.registerClass()
    export class BukuDialog extends Serenity.EntityDialog<BukuRow, any> {
        protected getFormKey() { return BukuForm.formKey; }
        protected getIdProperty() { return BukuRow.idProperty; }
        protected getLocalTextPrefix() { return BukuRow.localTextPrefix; }
        protected getNameProperty() { return BukuRow.nameProperty; }
        protected getService() { return BukuService.baseUrl; }
        protected getDeletePermission() { return BukuRow.deletePermission; }
        protected getInsertPermission() { return BukuRow.insertPermission; }
        protected getUpdatePermission() { return BukuRow.updatePermission; }

        protected form = new BukuForm(this.idPrefix);

    }
}