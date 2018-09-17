var focus='';
var count=0;
var c_length=0;
var inp=null;
function autocomplete(arr,loader,list,valinp) {
	console.log('autocomplete');
    var val=$(valinp).val();
    var ul=$(list).find("#reslist");
    $(ul).html('');
    inp=valinp;
    console.log(ul);
    c_length=0;
	 for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
         console.log(arr[i]);	$(loader).css('display','none');
         $(list).css('display','block');
            var c1='listclick(this)';
            var c='<li onclick="'+c1+'" style="">'+arr[i]+'</li>';
         $(ul).append(c);
         c_length++;
        }

    }
}
function listclick() {
focus="c ";
$(argument).toggleClass('active');
if(inp)$(inp).val($(argument).html());
console.log(argument);
}
function ondown(arg) {

if(count<c_length){
	count++;
	
}
console.log($( "ul#reslist li:nth-child("+count+")").html()+" needs to selected" );
var x=document.getElementById('reslist');
x=x.getElementsByTagName('li')
x[0].classList.add('active');

console.log("COUNT"+count+ x);
console.log("c_length"+c_length);

}