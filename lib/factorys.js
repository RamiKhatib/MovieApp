appmodule.factory('crudFactory',['$resource', function($resource) {
    return $resource('URL',{    // REPLACE URL
        get:{method:'GET'},
        post:{method:'POST'},
        update:{method:'UPDATE'},
        delete:{method:'DELETE'}
    });
}]);