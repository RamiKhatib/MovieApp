// Factory for CRUD commands
appmodule.factory('crudFactory',['$resource', function($resource) {
    return $resource('URL',{            // TODO : REPLACE URL
        get     :   {method:'GET'},     // TODO : PARAMETER
        post    :   {method:'POST'},    // TODO : PARAMETER
        put     :   {method:'PUT'},     // TODO : PARAMETER
        delete  :   {method:'DELETE'}   // TODO : PARAMETER
    });
}]);