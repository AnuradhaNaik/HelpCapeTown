
var scope=0;


function autocomplete(searchterm)
{

//just autocomplete logic 
var autocompleteresult='';
autocompleteresult=searchterm+autocompleteresult;
return autocompleteresult;

 
}
function parseSearchTerm(inpval)
{
	//get what you are searching for 
}
function onDot(scope)
{

}
function updateSearchResults(arg,inp)
{
// inp.addEventListener("input", function (e) {



 // });
}

function updateScope(argument) {
	scope=argument;
}
function incrementScope() {
	scope=scope+1;
}
function decrementScope() {
	scope=scope-1;
}
function getScope()
{
	return scope;
}