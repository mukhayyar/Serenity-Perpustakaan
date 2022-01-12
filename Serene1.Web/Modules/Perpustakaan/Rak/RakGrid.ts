
namespace Serene1.Perpustakaan {

    @Serenity.Decorators.registerClass()
    export class RakGrid extends Serenity.EntityGrid<RakRow, any> {
        protected getColumnsKey() { return RakColumns.columnsKey; }
        protected getDialogType() { return RakDialog; }
        protected getIdProperty() { return RakRow.idProperty; }
        protected getInsertPermission() { return RakRow.insertPermission; }
        protected getLocalTextPrefix() { return RakRow.localTextPrefix; }
        protected getService() { return RakService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}