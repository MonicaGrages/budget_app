CreditsService.$inject = ['$http'];

function CreditsService($http) {
  var self = this;

  self.getCredits = function () {
    return $http.get('/credits');
  }

  self.addCredit = function (newCredit) {
    console.log('add credit')
    var newCreditPromise = $http.post('/credits', newCredit);
    return newCreditPromise;
  }


}

angular.module('BudgetApp')
  .service('CreditsService', CreditsService);
