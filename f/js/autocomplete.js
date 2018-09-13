var focus='';
var count=0;
var c_length=0;
function autocomplete(arr,loader,list,valinp) {
	console.log('autocomplete');
    var val=$(valinp).val();
    var ul=$(list).find("#reslist");
    $(ul).html('');
    
    console.log(ul);
    c_length=0;
	 for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
         console.log(arr[i]);	$(loader).css('display','none');
         $(list).css('display','block');
            var c1='listclick("'+arr[i]+'"")';
            var c='<li  onclick="'+c1+'" style="">'+arr[i]+'</li>';
         $(ul).append(c);
         c_length++;
        }

    }
}
function listclick(argument) {
focus="c ";
console.log(focus);
}
function ondown() {
count++;
console.log("COUNT"+count);
console.log("c_length"+c_length);

}