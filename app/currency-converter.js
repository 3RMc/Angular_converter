angular.module('currencyConverter').directive('currencyConverter', function () {
    return {
        restrict: 'E',
        controller: 'CurConvCtrl',
        controllerAs: 'curConvCtrl',
        templateUrl: 'currency-converter.html'
    }
});

angular.module('currencyConverter').controller('CurConvCtrl', CurConvCtrl);

function CurConvCtrl($scope, CurrencyService) {
    this.currencies = [];      // массив для хранения валют
    this.currencyIn = null;    // валюта на руках
    this.currencyOut = null;   // валюта в обмен
    this.currencyRates = [];   // коэффициенты валют
    this.sumIn = 1;            // сумма на входе
    this.sumOut = 0;           // сумма на выходе

    this.setCurrencyIn = (currencyItem) => {
        this.currencyIn = currencyItem;
    }

    this.serCurrencyOut = (currencyItem) => {
        this.currencyOut = currencyItem;
    }

    this.setSumOut = (sum) => {
        this.sumOut = sum;
    }

    // получение списка валют
    this.getCurrencies = () => {
        CurrencyService.getCurrencies().then((res) => {
            this.currencies = res;
            this.setCurrencyIn(this.currencies[0]);
            this.serCurrencyOut(this.currencies[1]);
            this.updateRates();
        }, (err) => {
            console.log(err);
        });
    }

    /* обновление коэффициентов для выбранной валюты */
    this.updateRates = () => {
        this.getRatesByCurrency(this.currencyIn.code);
    }
}