angular.module('currencyConverter').service('CurrencyService', function ($q, $http) {
    var ratesUrl = 'https://api.fixer.io/latest'; // ссылка на ресурс получения коэффициентов

    // список возможных валют
    this.getCurrencies = () => {
        return $q((resolve, reject) => {
            var currencies = [
                { id:1, code:'RUB', name: 'Российский рубль' },
                { id:2, code:'USD', name: 'Доллар США' },
                { id:3, code:'EUR', name: 'Евро' },
                { id:4, code:'GBP', name: 'Фунт стерлингов' },
                { id:5, code:'JPY', name: 'Японская йена' },
                { id:6, code:'CNY', name: 'Китайский юань' }
            ];
            if (currencies)
                resolve(currencies);
            else
                reject({err:'Курсы валют не найдены'})
        });
    }
})