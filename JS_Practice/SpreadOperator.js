// spread-operators :

// The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
var p=[1,2,3,4];
var q=[...p];
console.log(p,q);

var OrginalCakeRecipe = { flavor: "chocolate", layers: 2, frosting: "vanilla" };
// Using the spread operator (...), we create a copy of the original recipe and make modifications as needed, while keeping the original unchanged.
var yummyCakeRecipe = { ...OrginalCakeRecipe, frosting: "chocolate" };
console.log(OrginalCakeRecipe); 
console.log(yummyCakeRecipe); 