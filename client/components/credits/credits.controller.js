CreditsController.$inject = ['CreditsService']; //the http call should really be happening in the service

function CreditsController(CreditsService) {
  let vm = this;
  vm.creditEntries = [
    // {amount: 123, note: "hello", createdAt: 123},
    // {amount: 223, note: "hi", createdAt: 123}
  ];

  vm.getCredits = getCredits;
//NEED TO READ ALL OF THE CREDIT ENTRIES FROM THE DB WHEN PAGE LOADS
  function getCredits() {
    CreditsService.getCredits()
    .then(function (response) {
      vm.creditEntries = response.data.credits;
    })
  }
  getCredits();

  vm.addCredit = function() {
    console.log(vm.newCredit);
    CreditsService.addCredit(vm.newCredit)
    .then(function(response) {
      vm.getCredits();
    })
    //make an ajax call to save the new credit to the db
    //only push to the creditentries array if the ajax call is successful

    // vm.creditEntries.push(
    //   {amount: vm.newCreditAmount,
    //     note: vm.newCreditNote,
    //     createdAt: new Date()
    //   })
    // vm.resetForm();
  };

  vm.resetForm = function () {
    vm.newCreditAmount = '';
  }
}

module.exports = CreditsController;
