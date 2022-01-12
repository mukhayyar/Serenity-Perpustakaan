
namespace Serene1.Perpustakaan {

    @Serenity.Decorators.registerClass()
    export class AnggotaGrid extends Serenity.EntityGrid<AnggotaRow, any> {
        protected getColumnsKey() { return AnggotaColumns.columnsKey; }
        protected getDialogType() { return AnggotaDialog; }
        protected getIdProperty() { return AnggotaRow.idProperty; }
        protected getInsertPermission() { return AnggotaRow.insertPermission; }
        protected getLocalTextPrefix() { return AnggotaRow.localTextPrefix; }
        protected getService() { return AnggotaService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}