// what is shallow copy??
var OrginalCakeRecipe = { flavor: "chocolate", layers: 2, frosting: "vanilla" };
var yummyCakeRecipe = { ...OrginalCakeRecipe };
yummyCakeRecipe.frosting= "chocolate";
console.log(OrginalCakeRecipe); 
console.log(yummyCakeRecipe); 
