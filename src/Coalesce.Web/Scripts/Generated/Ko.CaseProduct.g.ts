
/// <reference path="../coalesce.dependencies.d.ts" />

// Knockout View Model for: CaseProduct
// Generated by IntelliTect.Coalesce

module ViewModels {

	export class CaseProduct extends Coalesce.BaseViewModel
    {
        protected modelName = "CaseProduct";
        protected primaryKeyName: keyof this = "caseProductId";
        protected modelDisplayName = "Case Product";

        protected apiController = "/CaseProduct";
        protected viewController = "/CaseProduct";

        /** Behavioral configuration for all instances of CaseProduct. Can be overidden on each instance via instance.coalesceConfig. */
        public static coalesceConfig: Coalesce.ViewModelConfiguration<CaseProduct>
            = new Coalesce.ViewModelConfiguration<CaseProduct>(Coalesce.GlobalConfiguration.viewModel);

        /** Behavioral configuration for the current CaseProduct instance. */
        public coalesceConfig: Coalesce.ViewModelConfiguration<this>
            = new Coalesce.ViewModelConfiguration<CaseProduct>(CaseProduct.coalesceConfig);
    
        /** 
            The namespace containing all possible values of this.dataSource.
        */
        public dataSources: typeof ListViewModels.CaseProductDataSources = ListViewModels.CaseProductDataSources;
    

        public caseProductId: KnockoutObservable<number> = ko.observable(null);
        public caseId: KnockoutObservable<number> = ko.observable(null);
        public case: KnockoutObservable<ViewModels.Case> = ko.observable(null);
        public productId: KnockoutObservable<number> = ko.observable(null);
        public product: KnockoutObservable<ViewModels.Product> = ko.observable(null);

       
        /** Display text for Case */
        public caseText: KnockoutComputed<string>;
        /** Display text for Product */
        public productText: KnockoutComputed<string>;
        


        /** Pops up a stock editor for object case */
        public showCaseEditor: (callback?: any) => void;
        /** Pops up a stock editor for object product */
        public showProductEditor: (callback?: any) => void;




        /** 
            Load the ViewModel object from the DTO. 
            @param force: Will override the check against isLoading that is done to prevent recursion. False is default.
            @param allowCollectionDeletes: Set true when entire collections are loaded. True is the default. In some cases only a partial collection is returned, set to false to only add/update collections.
        */
        public loadFromDto = (data: any, force: boolean = false, allowCollectionDeletes: boolean = true): void => {
            if (!data || (!force && this.isLoading())) return;
            this.isLoading(true);
            // Set the ID 
            this.myId = data.caseProductId;
            this.caseProductId(data.caseProductId);
            // Load the lists of other objects
            // Objects are loaded first so that they are available when the IDs get loaded.
            // This handles the issue with populating select lists with correct data because we now have the object.
            if (!data.case) { 
                if (data.caseId != this.caseId()) {
                    this.case(null);
                }
            } else {
                if (!this.case()){
                    this.case(new Case(data.case, this));
                } else {
                    this.case().loadFromDto(data.case);
                }
                if (this.parent instanceof Case && this.parent !== this.case() && this.parent.caseKey() == this.case().caseKey())
                {
                    this.parent.loadFromDto(data.case, null, false);
                }
            }
            if (!data.product) { 
                if (data.productId != this.productId()) {
                    this.product(null);
                }
            } else {
                if (!this.product()){
                    this.product(new Product(data.product, this));
                } else {
                    this.product().loadFromDto(data.product);
                }
                if (this.parent instanceof Product && this.parent !== this.product() && this.parent.productId() == this.product().productId())
                {
                    this.parent.loadFromDto(data.product, null, false);
                }
            }

            // The rest of the objects are loaded now.
            this.caseId(data.caseId);
            this.productId(data.productId);
            if (this.coalesceConfig.onLoadFromDto()){
                this.coalesceConfig.onLoadFromDto()(this as any);
            }
            this.isLoading(false);
            this.isDirty(false);
    
            if (this.coalesceConfig.validateOnLoadFromDto()) this.validate();
        };
    
        /** Saves this object into a data transfer object to send to the server. */
        public saveToDto = (): any => {
            var dto: any = {};
            dto.caseProductId = this.caseProductId();

            dto.caseId = this.caseId();
            if (!dto.caseId && this.case()) {
                dto.caseId = this.case().caseKey();
            }
            dto.productId = this.productId();
            if (!dto.productId && this.product()) {
                dto.productId = this.product().productId();
            }

            return dto;
        }
    
        /**
            Loads any child objects that have an ID set, but not the full object.
            This is useful when creating an object that has a parent object and the ID is set on the new child.
        */
        public loadChildren = (callback?: () => void): void => {
            var loadingCount = 0;
            // See if this.case needs to be loaded.
            if (this.case() == null && this.caseId() != null){
                loadingCount++;
                var caseObj = new Case();
                caseObj.load(this.caseId(), function() {
                    loadingCount--;
                    this.case(caseObj);
                    if (loadingCount == 0 && typeof(callback) == "function"){
                        callback();
                    }
                });
            }
            // See if this.product needs to be loaded.
            if (this.product() == null && this.productId() != null){
                loadingCount++;
                var productObj = new Product();
                productObj.load(this.productId(), function() {
                    loadingCount--;
                    this.product(productObj);
                    if (loadingCount == 0 && typeof(callback) == "function"){
                        callback();
                    }
                });
            }
            if (loadingCount == 0 && typeof(callback) == "function"){
                callback();
            }
        };
        
        public setupValidation = (): void => {
            if (this.errors !== null) return;
            this.errors = ko.validation.group([
                this.caseId.extend({ required: {params: true, message: "Case is required."} }),
                this.productId.extend({ required: {params: true, message: "Product is required."} }),
            ]);
            this.warnings = ko.validation.group([
            ]);
        }
    
        // Computed Observable for edit URL
        public editUrl: KnockoutComputed<string> = ko.pureComputed(() => {
            return this.coalesceConfig.baseViewUrl() + this.viewController + "/CreateEdit?id=" + this.caseProductId();
        });

        constructor(newItem?: object, parent?: Coalesce.BaseViewModel | ListViewModels.CaseProductList){
            super(parent);
            this.baseInitialize();
            var self = this;
            self.myId;

            // Create computeds for display for objects
			self.caseText = ko.pureComputed(function()
			{   // If the object exists, use the text value. Otherwise show 'None'
				if (self.case() && self.case().title()) {
					return self.case().title().toString();
				} else {
					return "None";
				}
			});
			self.productText = ko.pureComputed(function()
			{   // If the object exists, use the text value. Otherwise show 'None'
				if (self.product() && self.product().name()) {
					return self.product().name().toString();
				} else {
					return "None";
				}
			});

    


            self.showCaseEditor = function(callback: any) {
                if (!self.case()) {
                    self.case(new Case());
                }
                self.case().showEditor(callback)
            };
            self.showProductEditor = function(callback: any) {
                if (!self.product()) {
                    self.product(new Product());
                }
                self.product().showEditor(callback)
            };

            // This stuff needs to be done after everything else is set up.
            self.caseId.subscribe(self.autoSave);
            self.case.subscribe(self.autoSave);
            self.productId.subscribe(self.autoSave);
            self.product.subscribe(self.autoSave);
        
            if (newItem) {
                self.loadFromDto(newItem, true);
            }
        }
    }





    export namespace CaseProduct {

        // Classes for use in method calls to support data binding for input for arguments
    }
}