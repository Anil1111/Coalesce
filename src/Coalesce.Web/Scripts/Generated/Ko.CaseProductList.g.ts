
/// <reference path="../coalesce.dependencies.d.ts" />

// Knockout List View Model for: CaseProduct
// Generated by IntelliTect.Coalesce

module ListViewModels {

    export namespace CaseProductDataSources {
        export class Default extends Coalesce.DataSource<ViewModels.CaseProduct> { }
            }

    export class CaseProductList extends Coalesce.BaseListViewModel<ViewModels.CaseProduct> {
        protected modelName: string = "CaseProduct";
        protected apiController: string = "/CaseProduct";
        public modelKeyName: string = "caseProductId";
        public itemClass: new () => ViewModels.CaseProduct = ViewModels.CaseProduct;

        public filter: {
            caseProductId?:string;
            caseId?:string;
            productId?:string;
        } = null;
    
        /** 
            The namespace containing all possible values of this.dataSource.
        */
        public dataSources: typeof CaseProductDataSources = CaseProductDataSources;

        /**
            The data source on the server to use when retrieving objects.
            Valid values are in this.dataSources.
        */
        public dataSource: Coalesce.DataSource<ViewModels.CaseProduct> = new this.dataSources.Default();

        public static coalesceConfig = new Coalesce.ListViewModelConfiguration<CaseProductList, ViewModels.CaseProduct>(Coalesce.GlobalConfiguration.listViewModel);
        public coalesceConfig: Coalesce.ListViewModelConfiguration<CaseProductList, ViewModels.CaseProduct>
            = new Coalesce.ListViewModelConfiguration<CaseProductList, ViewModels.CaseProduct>(CaseProductList.coalesceConfig);


        protected createItem = (newItem?: any, parent?: any) => new ViewModels.CaseProduct(newItem, parent);

        constructor() {
            super();
        }
    }

    export namespace CaseProductList {
        // Classes for use in method calls to support data binding for input for arguments
    }
}