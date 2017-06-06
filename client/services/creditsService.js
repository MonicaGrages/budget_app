CreditsService.$inject = ['$http'];

function CreditsService($http) {
  var self = this;

  self.getCredits = function () {
    console.log('get credits');
    return $http.get('/credits');
  }


}

angular.module('BudgetApp')
  .service('CreditsService', CreditsService);
