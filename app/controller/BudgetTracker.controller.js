(function() {
    'use strict';

    angular
        .module('BudgetTracker')
        .controller('BudgetTrackerCtrl', BudgetTrackerCtrl);

    /* @ngInject */
    function BudgetTrackerCtrl() {
        var vm = this;

        // Declare empty expense and income arrays
        vm.addExpense = [];
        vm.addIncome = [];

        // Function to add another item to the expense array when clicked
        vm.addExpenseClick = function (name, amount) {
          vm.addExpense.push(vm.expenseInput);
          vm.expenseInput = {};
        };

        // Function to add another item to the income array when clicked
        vm.addIncomeClick = function (name, amount) {
          vm.addIncome.push(vm.incomeInput);
          vm.incomeInput = {};
        };
    }
})();
