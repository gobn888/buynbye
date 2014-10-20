'use strict()';

app.controller('clockController', function($scope, $timeout) {
    var updateClock = function() {
        var myClock = new Date();
        myClock = myClock.toLocaleTimeString();

        $scope.clock = myClock;
        $timeout(function() {
            updateClock();
        }, 1000);
    };

    updateClock();
});
app.controller('currencyController', function($scope, $http) {
    $scope.options = [{
        label: 'Norwegian Kroner',
        value: 'NOK',
    }, {
        label: 'Euro',
        value: 'EUR'
    }, {
        label: 'British Pound',
        value: 'GBP'
    }, {
        label: 'Chinese Yuan',
        value: 'CNY'
    }, {
        label: 'Malaysian Ringgit',
        value: 'MYR'
    }];

    $scope.currencyvalue = $scope.options[0];
    $scope.clickconvert = function() {
        if ($scope.currencyvalue.value == "NOK") {
            $scope.convert = $scope.pricevalue / $scope.results.rates.NOK;
        } else if ($scope.currencyvalue.value == "EUR") {
            $scope.convert = $scope.pricevalue / $scope.results.rates.EUR;
        } else if ($scope.currencyvalue.value == "GBP") {
            $scope.convert = $scope.pricevalue / $scope.results.rates.GBP;
        } else if ($scope.currencyvalue.value == "CNY") {
            $scope.convert = $scope.pricevalue / $scope.results.rates.CNY;
        } else if ($scope.currencyvalue.value == "MYR") {
            $scope.convert = $scope.pricevalue / $scope.results.rates.MYR;
        }
    };

    var responsePromise = $http.get("http://openexchangerates.org/api/latest.json?app_id=c46dcb338b3b4a65956c83320907c454")
    responsePromise.success(function(response) {
        $scope.results = response;

    });
    responsePromise.error(function(data, status, headers, config) {
        alert("Failed!!");
    });

});
