
namespace Serene1.Perpustakaan {

    @Serenity.Decorators.registerClass()
    export class PeminjamanGrid extends Serenity.EntityGrid<PeminjamanRow, any> {
        protected getColumnsKey() { return PeminjamanColumns.columnsKey; }
        protected getDialogType() { return PeminjamanDialog; }
        protected getIdProperty() { return PeminjamanRow.idProperty; }
        protected getInsertPermission() { return PeminjamanRow.insertPermission; }
        protected getLocalTextPrefix() { return PeminjamanRow.localTextPrefix; }
        protected getService() { return PeminjamanService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getButtons() {
            var buttons = super.getButtons();

            buttons.push(Serenity.Extensions.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: PeminjamanService.baseUrl + '/ListExcel',
                separator: true
            }));

            buttons.push(Serenity.Extensions.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit()
            }));

            return buttons;
        }
    }
}