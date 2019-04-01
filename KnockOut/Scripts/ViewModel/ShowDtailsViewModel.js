var cbo = cbo || {};

cbo.ShowDtailsViewModel = function (baseApiUrl, PortalApiRels) {

    if (!baseApiUrl) {
        throw new Error("base url is empty");
    }
    if (!PortalApiRels) {
        throw new Error("portel url is empty");
    }
    var userCollection = ko.observableArray();
    var callBackSuccess_GetUser = function (data) {

        if (data.length > 0) {
            for (var Index = 0; Index < data.length; Index++) {

                var userViewModel = new cbo.UserModel();
                userViewModel.ProductId(data[Index].ProductId);
                userViewModel.ProductName(data[Index].ProductName);
                userViewModel.ProductPrice(data[Index].ProductPrice);
                userViewModel.ProductQuantity(data[Index].ProductQuantity);
                userViewModel.ProductType(data[Index].ProductType);
                userViewModel.ProductCode(data[Index].ProductCode);
                userViewModel.ProductPassword(data[Index].ProductPassword);
                userViewModel.ProductDiscription(data[Index].ProductDiscription);

                userCollection.push(userViewModel);
            }
        }

    }

    var CallBackFailure_GetUser = function () {
        //failure toster message 
    }

    var GetUser = function () {

        var userTypeUrl = baseApiUrl + "/" + PortalApiRels.Product_API + "/" + PortalApiRels.GET;
        AjaxCall_Get(userTypeUrl, callBackSuccess_GetUser, CallBackFailure_GetUser);


    }
    var loadDefaults = function () {
        $.ajaxSetup({
            cache: false
        });

        GetUser();
    };

    loadDefaults(); //PAge load method

    return {
        //sendCommand: commandResponse,
        userCollection: userCollection
        //user_AddEdit: user_AddEdit
    };
}

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