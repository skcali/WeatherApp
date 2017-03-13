angular.module('VSTDL', []);

angular
	.module('VSTDL')
	.controller('TodoApp', todoApp);

function todoApp() {

  var vm = this;

	// Place holders to push information gathered from user
	vm.order = "";
	vm.todos = [];

	// Array of options with their priority value and styling
	vm.priorities = [
		["High", 1, "list-group-item list-group-item-danger"],
		["Medium", 2, "list-group-item list-group-item-warning"],
		["Low", 3, "list-group-item list-group-item-success"]
	];

	// Function to add the todos when clicked
	vm.addTodo = function() {
		vm.todos.push([vm.todoName, vm.priority[1], vm.priority[2]]);
		vm.todoName = "";
		vm.priority= "";
	}

	// Functions to set order when order buttons are pushed
	vm.byHigh = function() {
		vm.order="1";
	}
	vm.byLow = function() {
		vm.order="-1";
	}
	vm.byAlphabet = function() {
		vm.order="0";
	}

};
