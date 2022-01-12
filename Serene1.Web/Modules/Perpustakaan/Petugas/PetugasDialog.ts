
namespace Serene1.Perpustakaan {

    @Serenity.Decorators.registerClass()
    export class PetugasDialog extends Serenity.EntityDialog<PetugasRow, any> {
        protected getFormKey() { return PetugasForm.formKey; }
        protected getIdProperty() { return PetugasRow.idProperty; }
        protected getLocalTextPrefix() { return PetugasRow.localTextPrefix; }
        protected getNameProperty() { return PetugasRow.nameProperty; }
        protected getService() { return PetugasService.baseUrl; }
        protected getDeletePermission() { return PetugasRow.deletePermission; }
        protected getInsertPermission() { return PetugasRow.insertPermission; }
        protected getUpdatePermission() { return PetugasRow.updatePermission; }

        protected form = new PetugasForm(this.idPrefix);

    }
}