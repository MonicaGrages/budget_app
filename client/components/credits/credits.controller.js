CreditsController.$inject = ['CreditsService']; //the http call should really be happening in the service

function CreditsController(CreditsService) {
  let vm = this;
  vm.creditEntries = [
    // {amount: 123, note: "hello", createdAt: 123},
    // {amount: 223, note: "hi", createdAt: 123}
  ];
  vm.totalCredit = 0;
  vm.calculateTotalCredit = function() {
    for (let i=0; i<vm.creditEntries.length; i++) {
      vm.totalCredit = vm.totalCredit + (vm.creditEntries[i]).amount;
    }
  }


  vm.getCredits = getCredits;
//READ ALL CREDIT ENTRIES FROM THE DB WHEN PAGE LOADS
  function getCredits() {
    CreditsService.getCredits()
    .then(function (response) {
      vm.creditEntries = response.data.credits;
      vm.calculateTotalCredit();
    })
  }
  getCredits();


//Add new credit entry
  vm.addCredit = function() {
    CreditsService.addCredit(vm.newCredit)
    .then(function(response) {
      vm.creditEntries.push({
        amount: vm.newCredit.amount,
        note: vm.newCredit.note,
        createdAt: new Date()
      });
      vm.resetForm();
    })
    vm.resetForm = function () {
      vm.newCredit = {};
    }
  };


}

module.exports = CreditsController;
