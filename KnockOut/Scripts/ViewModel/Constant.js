var cbo = cbo || {};

cbo.Constant = function () {


    var PortalApiRels = {

        //API's
        Product_API: "Product",
    
        //Http Verbs
        GET: "Get",
        POST: "Post",
        PUT: "Put",
        GETBYID: "GEtById",
        DELETE: "Remove",
        GETPRODUCT: "PutProduct",
        GETCOUNTRY: "GetCountry"

      //  url: "http://localhost:49251/"

    };

    return {

        BASE_URIAPI: 'http://localhost:49251',

        PortalApiRels: PortalApiRels
    };


}();