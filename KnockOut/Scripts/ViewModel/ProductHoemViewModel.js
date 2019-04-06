var cbo = cbo || {};

cbo.ShowDtailsViewModel = function (baseApiUrl, PortalApiRels) {

    if (!baseApiUrl) {
        throw new Error("base url is empty");
    }
    if (!PortalApiRels) {
        throw new Error("portel url is empty");
    }

    var GetUser = function () {
        var x = $(hide).val();
        ProductCode = data.Product_ShowDetails().oductCode_ProductDetails();
        var userTypeUrl = baseApiUrl + "/" + PortalApiRels.Product_API + "/" + PortalApiRels.GETBYID;
        AjaxCall_Get(ProductCode,userTypeUrl, callBackSuccess_GetUser, CallBackFailure_GetUser);


    }

    var loadDefaults = function () {
        $.ajaxSetup({
            cache: false
        });

        GetUser();
    };

    cbo.UserModel = function () {
        var self = this;

        self.ProductId = ko.observable();
        self.ProductName = ko.observable();
        self.ProductPrice = ko.observable();
        self.ProductQuantity = ko.observable();
        self.ProductType = ko.observable();
        self.ProductCode = ko.observable();
        self.ProductPassword = ko.observable();
        self.ProductDiscription = ko.observable();
    }
}