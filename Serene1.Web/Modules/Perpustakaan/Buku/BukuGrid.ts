
namespace Serene1.Perpustakaan {

    @Serenity.Decorators.registerClass()
    export class BukuGrid extends Serenity.EntityGrid<BukuRow, any> {
        protected getColumnsKey() { return BukuColumns.columnsKey; }
        protected getDialogType() { return BukuDialog; }
        protected getIdProperty() { return BukuRow.idProperty; }
        protected getInsertPermission() { return BukuRow.insertPermission; }
        protected getLocalTextPrefix() { return BukuRow.localTextPrefix; }
        protected getService() { return BukuService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}