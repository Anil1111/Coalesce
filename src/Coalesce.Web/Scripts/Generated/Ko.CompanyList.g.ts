
/// <reference path="../coalesce.dependencies.d.ts" />

// Knockout List View Model for: Company
// Generated by IntelliTect.Coalesce

module ListViewModels {

    export namespace CompanyDataSources {
        export class Default extends Coalesce.DataSource<ViewModels.Company> { }
                
        export class DefaultSource extends Coalesce.DataSource<ViewModels.Company> {
        }
    }

    export class CompanyList extends Coalesce.BaseListViewModel<ViewModels.Company> {
        public readonly modelName: string = "Company";
        public readonly apiController: string = "/Company";
        public modelKeyName: string = "companyId";
        public itemClass: new () => ViewModels.Company = ViewModels.Company;

        public filter: {
            companyId?:string;
            name?:string;
            address1?:string;
            address2?:string;
            city?:string;
            state?:string;
            zipCode?:string;
            isDeleted?:string;
        } | null = null;
    
        /** 
            The namespace containing all possible values of this.dataSource.
        */
        public dataSources: typeof CompanyDataSources = CompanyDataSources;

        /**
            The data source on the server to use when retrieving objects.
            Valid values are in this.dataSources.
        */
        public dataSource: Coalesce.DataSource<ViewModels.Company> = new this.dataSources.Default();

        public static coalesceConfig = new Coalesce.ListViewModelConfiguration<CompanyList, ViewModels.Company>(Coalesce.GlobalConfiguration.listViewModel);
        public coalesceConfig: Coalesce.ListViewModelConfiguration<CompanyList, ViewModels.Company>
            = new Coalesce.ListViewModelConfiguration<CompanyList, ViewModels.Company>(CompanyList.coalesceConfig);

        
        /**
            Methods and properties for invoking server method GetCertainItems.
        */
        public readonly getCertainItems = new CompanyList.GetCertainItems(this);
        public static GetCertainItems = class GetCertainItems extends Coalesce.ClientMethod<CompanyList, ViewModels.Company[]> {
            public readonly name = 'GetCertainItems';
            public readonly verb = 'POST';
            public result: KnockoutObservableArray<ViewModels.Company> = ko.observableArray([]);
            
            /** Calls server method (GetCertainItems) with the given arguments */
            public invoke = (isDeleted: boolean | null, callback?: (result: ViewModels.Company[]) => void, reload: boolean = true): JQueryPromise<any> => {
                return this.invokeWithData({ isDeleted: isDeleted }, callback, reload);
            };
            
            /** Object that can be easily bound to fields to allow data entry for the method's parameters */
            public args = new GetCertainItems.Args(); 
            public static Args = class Args {
                public isDeleted: KnockoutObservable<boolean | null> = ko.observable(null);
            };
            
            /** Calls server method (GetCertainItems) with an instance of GetCertainItems.Args, or the value of this.args if not specified. */
            public invokeWithArgs = (args = this.args, callback?: (result: ViewModels.Company[]) => void, reload: boolean = true): JQueryPromise<any> => {
                return this.invoke(args.isDeleted(), callback, reload);
            }
            
            /** Invokes the method after displaying a browser-native prompt for each argument. */
            public invokeWithPrompts = (callback?: (result: ViewModels.Company[]) => void, reload: boolean = true): JQueryPromise<any> | undefined => {
                var $promptVal: string | null = null;
                $promptVal = prompt('Is Deleted');
                if ($promptVal === null) return;
                var isDeleted: boolean = ($promptVal.toUpperCase() == 'TRUE');
                return this.invoke(isDeleted, callback, reload);
            };
            
            protected loadResponse = (data: Coalesce.ItemResult, callback?: (result: ViewModels.Company[]) => void, reload: boolean = true) => {
                Coalesce.KnockoutUtilities.RebuildArray(this.result, data.object, 'companyId', ViewModels.Company, this, true);
                if (reload) {
                    var result = this.result();
                    this.parent.load(typeof(callback) == 'function' ? () => callback(result) : undefined);
                } else if (typeof(callback) == 'function') {
                    callback(this.result());
                }
            };
        };

        protected createItem = (newItem?: any, parent?: any) => new ViewModels.Company(newItem, parent);

        constructor() {
            super();
        }
    }
}