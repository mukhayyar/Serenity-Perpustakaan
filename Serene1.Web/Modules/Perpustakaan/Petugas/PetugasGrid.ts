
namespace Serene1.Perpustakaan {

    @Serenity.Decorators.registerClass()
    export class PetugasGrid extends Serenity.EntityGrid<PetugasRow, any> {
        protected getColumnsKey() { return PetugasColumns.columnsKey; }
        protected getDialogType() { return PetugasDialog; }
        protected getIdProperty() { return PetugasRow.idProperty; }
        protected getInsertPermission() { return PetugasRow.insertPermission; }
        protected getLocalTextPrefix() { return PetugasRow.localTextPrefix; }
        protected getService() { return PetugasService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}