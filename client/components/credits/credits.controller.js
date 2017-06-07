CreditsController.$inject = ['CreditsService']; //the http call should really be happening in the service

function CreditsController(CreditsService) {
  let vm = this;
  vm.creditEntries = [
    // {amount: 123, note: "hello", createdAt: 123},
    // {amount: 223, note: "hi", createdAt: 123}
  ];

  vm.getCredits = getCredits;
//READ ALL CREDIT ENTRIES FROM THE DB WHEN PAGE LOADS
  function getCredits() {
    CreditsService.getCredits()
    .then(function (response) {
      vm.creditEntries = response.data.credits;
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
}

module.exports = CreditsController;
