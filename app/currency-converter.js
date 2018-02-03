angular.module('currencyConverter').directive('currencyConverter', function () {
    return {
        restrict: 'E',
        controller: 'CurConvCtrl',
        controllerAs: 'curConvCtrl',
        templateUrl: 'currency-converter.html'
    }
})