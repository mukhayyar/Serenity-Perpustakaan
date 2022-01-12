
namespace Serene1.Perpustakaan {

    @Serenity.Decorators.registerClass()
    export class RakBukuGrid extends Serenity.EntityGrid<BukuRow, any> {
        protected getColumnsKey() { return "Perpustakaan.RakBuku"; }
        protected getIdProperty() { return BukuRow.idProperty; }
        protected getLocalTextPrefix() { return BukuRow.localTextPrefix; }
        protected getService() { return BukuService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
        protected getButtons() {
            return null;
        }

        protected getInitialTitle() {
            return null;
        }

        protected usePager() {
            return false;
        }

        protected getGridCanLoad() {
            return this.rakID != null;
        }

        private _rakID: number;

        get rakID() {
            return this._rakID;
        }

        set rakID(value: number) {
            if (this._rakID != value) {
                this._rakID = value;
                this.setEquality(BukuRow.Fields.RakId, value);
                this.refresh();
            }
        }
    }
}