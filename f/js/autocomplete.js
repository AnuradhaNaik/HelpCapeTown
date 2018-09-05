function autocomplete(arr,loader,list,val) {
	console.log('autocomplete');
	$(loader).css('display','none');
	 for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
         console.log(arr[i]);
        }
    }
}