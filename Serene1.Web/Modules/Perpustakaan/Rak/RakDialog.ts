
namespace Serene1.Perpustakaan {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class RakDialog extends Serenity.EntityDialog<RakRow, any> {
        protected getFormKey() { return RakForm.formKey; }
        protected getIdProperty() { return RakRow.idProperty; }
        protected getLocalTextPrefix() { return RakRow.localTextPrefix; }
        protected getNameProperty() { return RakRow.nameProperty; }
        protected getService() { return RakService.baseUrl; }
        protected getDeletePermission() { return RakRow.deletePermission; }
        protected getInsertPermission() { return RakRow.insertPermission; }
        protected getUpdatePermission() { return RakRow.updatePermission; }

        protected form = new RakForm(this.idPrefix);

        private bukuGrid: RakBukuGrid;

        constructor() {
            super();

            this.bukuGrid = new RakBukuGrid(this.byId("BukuGrid"));
            this.tabs.on('tabsactivate', (e, i) => {
                this.arrange();
            });
        }

        protected afterLoadEntity()
        {
            super.afterLoadEntity();

            this.bukuGrid.rakID = this.entityId;
        }

        protected getTemplate() {
            return `<div id="~_Tabs" class="s-DialogContent">
        <ul>
            <li><a href="#~_TabInfo"><span>Rak</span></a></li>
            <li><a href="#~_TabMovies"><span>Buku</span></a></li>
        </ul>
        <div id="~_TabInfo" class="tab-pane s-TabInfo">
            <div id="~_Toolbar" class="s-DialogToolbar">
            </div>
            <div class="s-Form">
                <form id="~_Form" action="">
                    <div class="fieldset">
                        <div id="~_PropertyGrid"></div>
                        <div class="clear"></div>
                    </div>
                </form>
            </div>
        </div>
        <div id="~_TabBuku" class="tab-pane s-TabBuku">
            <div id="~_BukuGrid">
    
            </div>
        </div>
    </div>`;
        }

    }
}