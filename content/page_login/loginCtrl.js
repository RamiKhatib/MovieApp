appmodule.controller('loginCtrl',function ($scope) {
    // Did last submit fail ?
    $scope.didSubmitFail = false;

    // Submit form : - let user submit credentials and check if valid
    //               - update didSubmitFail
    $scope.submit = function () {
        // Make nick and passwd local available
        $scope.user.nick = $scope.nick;
        $scope.user.passwd = $scope.passwd;
        // Let user submit credentials and check if succeded
        $scope.user.submit();
        if ($scope.user.isConnected){
            $scope.didSubmitFail = false;
        } else $scope.didSubmitFail = true;
    }
});