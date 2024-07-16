//var :
// It's Global scoped or function scoped which means variables defined outside the function can be then only accessed globally, and variables defined inside a particular function can be accessed within the function. 
var a = 10
function f() {
	var a = 20
	console.log(a)
}
f();
console.log(a);
// re-declare and update a variable with same name in the same scope using the var keyword
var a = 10
var a = 8
a = 7 
console.log(a);
// variables are hoisted.
