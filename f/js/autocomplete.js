function autocomplete(arr,loader,list,valinp) {
	console.log('autocomplete');
    var val=$(valinp).val();
    var ul=$(list).find("#reslist");
    $(ul).html('');
    
    console.log(ul);
	 for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
         console.log(arr[i]);	$(loader).css('display','none');
         $(list).css('display','block');
         $(ul).append('<li style="">'+arr[i]+'</li>');
        }

    }
}