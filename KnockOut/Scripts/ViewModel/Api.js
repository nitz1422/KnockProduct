var AjaxCall_Get = function (targetUrl, callbackSuccess, callbackFailure) {
    if (!callbackSuccess
        || !callbackFailure
        || typeof callbackSuccess !== "function"
        || typeof callbackFailure !== "function") {
        throw {
            name: "Invalid Arguments",
            message: "Error retrieving resource.callbackSuccess or callbackFailure specified is null or not a function"
        };
    }

    var url = targetUrl;

    var ajaxSuccess = function (data) {
        if (data) {
            callbackSuccess(data);
        } else {
            callbackSuccess();
        }
    };
    var ajaxFailure = function (xhr, errorText, thrownError) {
        var errorMessage = "Failed API=" + targetUrl
            + "|Error Thrown=" + thrownError
            + "| Error Text =" + errorText;
        callbackFailure(errorMessage);
    };

    return $.ajax({
        url: url,
        dataType: 'json'
    }).then(ajaxSuccess, ajaxFailure);
};

var AjaxCal1_GetById = function (id, targetUrl, callbackSuccess, callbackFailure) {
    if (!callbackSuccess
        || !callbackFailure
        || typeof callbackSuccess !== "function"
        || typeof callbackFailure !== "function") {
        throw {
            name: "Invalid Arguments",
            message: "Error retrieving resource.callbackSuccess or callbackFailure specified is null or not a function"
        };
    }
    var url = targetUrl;
    if (id) {
        url = targetUrl + "/" + id;
    }
    var ajaxSuccess = function (data) {
        if (data) {
            callbackSuccess(data);
        } else {
            callbackSuccess();
        }
    };
    var ajaxFailure = function (xhr, errorText, thrownEnror) {
        var errorMessage = "Failed API=" + targetUrl
            + "| Error Thrown=" + thrownError
            + "|Error Text =" + errorText;
        callbackFailure(errorMessage);
    };
    return $.ajax({
        url: url,
        dataType: 'json'
    }).then(ajaxSuccess, ajaxFailure);
};

var AjaxCall_Post = function (entity, targetUrl, callbackSuccess, callbackFailure) {
    if (!callbackSuccess
        || !callbackFailure
        || typeof callbackSuccess !== "function"
        || typeof callbackFailure !== "function") {
        throw {
            name: "Invalid Arguments",
            message: "Error retrieving resource.callbacksuccess or callbackFailure specified is null or not a function"
        };
    }
    var url = targetUrl;
    if (entity) {
        url = targetUrl;
    }
    var ajaxSuccess = function (data) {
        if (data) {
            callbackSuccess(data);
        } else {
            callbackSuccess();
        }
    };
    var ajaxFailure = function (xhr, errorText, thrownError) {
        var errorMessage = "Failed API=" + targetUrl
            + "| Error Thrown=" + thrownError
            + "| Error Text =" + errorText;
        callbackFailure(errorMessage);
    };

    var jsonEntity = JSON.stringify(entity);

    return $.ajax({
        type: 'POST',
        data: jsonEntity,
        url: url,
        contentType: "application/json"
    }).then(ajaxSuccess, ajaxFailure);
};

var AjaxCall_Put = function (id, entity, targetUrl, callbackSuccess, callbackFailure) {
    if (!callbackSuccess
        || !callbackFailure
        || typeof callbackSuccess !== "function"
        || typeof callbackFailure !== "function") {
        throw {
            name: "Invalid Arguments",
            message: "Error retrieving resource.callbackSuccess or callbackFailure specified is null or not a function"
        };
    }
    var url = targetUrl;

    if (id) {
        url = targetUrl + "/" + id;
    }

    var ajaxSuccess = function (data) {
        if (data) {
            callbackSuccess(data);
        } else {
            callbackSuccess();
        }
    };

    var ajaxFailure = function (xhr, errorText, thrownError) {
        var errorMessage = "Failed API =" + targetUrl
            + "| Error Thrown =" + thrownError
            + "|Error Text=" + errorText;
        callbackFailure(errorMessage);
    };

    var jsonEntity = JSON.stringify(entity);

    return $.ajax({
        type: 'PUT',
        data: jsonEntity,
        url: url,
        contentType: "application/json"
    }).then(ajaxSuccess, ajaxFailure);
};

