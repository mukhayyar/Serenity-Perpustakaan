
namespace Serene1.Perpustakaan {

    @Serenity.Decorators.registerClass()
    export class PengembalianGrid extends Serenity.EntityGrid<PengembalianRow, any> {
        protected getColumnsKey() { return PengembalianColumns.columnsKey; }
        protected getDialogType() { return PengembalianDialog; }
        protected getIdProperty() { return PengembalianRow.idProperty; }
        protected getInsertPermission() { return PengembalianRow.insertPermission; }
        protected getLocalTextPrefix() { return PengembalianRow.localTextPrefix; }
        protected getService() { return PengembalianService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getButtons() {
            var buttons = super.getButtons();

            buttons.push(Serenity.Extensions.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: PengembalianService.baseUrl + '/ListExcel',
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