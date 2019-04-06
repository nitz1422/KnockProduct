var cbo = cbo || {};

cbo.ShowDtailsViewModel = function (baseApiUrl, PortalApiRels) {

    if (!baseApiUrl) {
        throw new Error("base url is empty");
    }
    if (!PortalApiRels) {
        throw new Error("portel url is empty");
    }
    var userCollection = ko.observableArray(),
        CountryCollection = ko.observableArray(),
        Product_ShowDetails = ko.observable(new cbo.ProductDetailsViewModel());
    
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

    
    var callBackSuccess_GetUser = function (data) {

        if (data.length > 0) {
            for (var Index = 0; Index < data.length; Index++) {

                var userViewModel = new cbo.UserModel();
                userViewModel.ProductId(data[Index].ProductId);
                CountryCollection.push(userViewModel);
            }
        }

    }

    var CallBackFailure_GetUser = function () {
        //failure toster message 
    }

    var GetCountry = function () {

        var userTypeUrl = baseApiUrl + "/" + PortalApiRels.Product_API + "/" + PortalApiRels.GETCOUNTRY;
        AjaxCall_Get(userTypeUrl, callBackSuccess_GetCountry, CallBackFailure_GetCountry);


    }

    var callBackSuccess_SaveUser = function (data) {
        alert("sucess");
        window.location.href = "http://localhost:64685/Product/AllDetails";
       
        //if (data[0].CurrentStatus == 'Success') {
        //    //Sucess
        //}
        //else {
        //    //Fails //toaster
        //}

    }

    var CallBackFailure_SaveUser = function () {
        //failure toster message 
    }

    var SaveUser = function (data) {



        if (data.Product_ShowDetails().ProductId_ProductDetails() > 0) {
            var putEntity = {

                ProductId: data.Product_ShowDetails().ProductId_ProductDetails(),
                ProductName: data.Product_ShowDetails().ProductName_ProductDetails(),
                ProductCode: data.Product_ShowDetails().ProductCode_ProductDetails(),
                ProductPassword: data.Product_ShowDetails().ProductPassword_ProductDetails(),
                ProductPrice: data.Product_ShowDetails().ProductPrice_ProductDetails(),
                ProductType: data.Product_ShowDetails().ProductType_ProductDetails(),
                ProductQuantity: data.Product_ShowDetails().ProductQuantity_ProductDetails(),
                ProductDiscription: data.Product_ShowDetails().ProductDiscription_ProductDetails(),
            };
            var userTypeUrl = baseApiUrl + "/" + PortalApiRels.Product_API + "/" + PortalApiRels.PUT;
            AjaxCall_Put(putEntity.Id, putEntity, userTypeUrl, callBackSuccess_SaveUser, CallBackFailure_SaveUser)

        }
        else {


            var postEntity = {
                ProductId: data.Product_ShowDetails().ProductId_ProductDetails(),
                ProductName: data.Product_ShowDetails().ProductName_ProductDetails(),
                ProductCode: data.Product_ShowDetails().ProductCode_ProductDetails(),
                ProductPassword: data.Product_ShowDetails().ProductPassword_ProductDetails(),
                ProductPrice: data.Product_ShowDetails().ProductPrice_ProductDetails(),
                ProductType: data.Product_ShowDetails().ProductType_ProductDetails(),
                ProductQuantity: data.Product_ShowDetails().ProductQuantity_ProductDetails(),
                ProductDiscription: data.Product_ShowDetails().ProductDiscription_ProductDetails(),
            };
            var userTypeUrl = baseApiUrl + "/" + PortalApiRels.Product_API + "/" + PortalApiRels.POST;
          
            AjaxCall_Post(postEntity, userTypeUrl, callBackSuccess_SaveUser, CallBackFailure_SaveUser)

        }
    }

   




    var HandleDetails = function (data) {

        Product_ShowDetails().ProductId_ProductDetails(data.ProductId());
        Product_ShowDetails().ProductName_ProductDetails(data.ProductName());
        Product_ShowDetails().ProductCode_ProductDetails(data.ProductCode()); 
        Product_ShowDetails().ProductPassword_ProductDetails(data.ProductPassword());
        Product_ShowDetails().ProductPrice_ProductDetails(data.ProductPrice());
        Product_ShowDetails().ProductQuantity_ProductDetails(data.ProductQuantity());
        Product_ShowDetails().ProductType_ProductDetails(data.ProductType());
        Product_ShowDetails().ProductDiscription_ProductDetails(data.ProductDiscription());        
    }
    var callBackSuccess_LoginProduct = function (data) {
        window.location.href = "http://localhost:64685/ProductHome/Index";
       

        //if (data[0].CurrentStatus == 'Success') {
        //    //Sucess
        //}
        //else {
        //    //Fails //toaster
        //}

    }

    var CallBackFailure_LoginProduct = function () {
        //failure toster message 
    }
   
    var LoginUser = function (data) {

        
        ProductCode = data.Product_ShowDetails().ProductCode_ProductDetails();
        ProductPassword = data.Product_ShowDetails().ProductPassword_ProductDetails();
       
        var userTypeUrl = baseApiUrl + "/" + PortalApiRels.Product_API + "/" + PortalApiRels.GETPRODUCT+"?EmailId="+ProductCode+"&Password="+ProductPassword;
            AjaxCall_Get( userTypeUrl, callBackSuccess_LoginProduct, CallBackFailure_LoginProduct)

    }


    var commandResponse = function (command, data) {

        switch (command) {
            case 'ProductDetails':
                HandleDetails(data);
                $('#ShowProduct').modal('show');
             
                break;
            case 'RegisterProduct':
                $('#ProductRegistrationView').modal('show');

                break;
            case 'SAVE_USER':
                SaveUser(data);
                break;

            case 'LoginProduct':
                $('#ProductLoginView').modal('show');
                break;

            case 'SaveProduct':
                LoginUser(data);
                break;




        }
    };
    var loadDefaults = function () {
        $.ajaxSetup({
            cache: false
        });
        GetCountry();
        GetUser();
    };

    loadDefaults(); //PAge load method

    return {
        sendCommand: commandResponse,
        userCollection: userCollection,
        Product_ShowDetails: Product_ShowDetails,
     //   CountryCollection: CountryCollection
    };
}

cbo.ProductDetailsViewModel = function () {

    var self = this;
    self.ProductId_ProductDetails = ko.observable();
    self.ProductName_ProductDetails = ko.observable();
    self.ProductPrice_ProductDetails = ko.observable();
    self.ProductQuantity_ProductDetails = ko.observable();
    self.ProductType_ProductDetails = ko.observable();
    self.ProductCode_ProductDetails = ko.observable();
    self.ProductPassword_ProductDetails = ko.observable();
    self.ProductDiscription_ProductDetails = ko.observable();

    //  self.Lastname_AddEdit = ko.observable().extend({ required: true });

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

cbo.UserModel = function () {
    var self = this;

    self.ProductId = ko.observable();
    self.ProductName = ko.observable();
  
}



