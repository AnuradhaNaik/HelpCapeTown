 



         function common() {
            
$('.action-bar button ').click(function () {
            $(this).parent().toggleClass('selected');
         });



         $('.action-bar button.replybutton ').click(function () {
           openreply();
         });
         $('.action-bar button.morebutton ').click(function () {
            openmore();
         });
         $('ul.poll_options li').click(function(){
             $(this).parent().addClass('polldone');/*
         
         calc( 100% - 60px )
             */
         
         });


return;


         }



 function openreply(){
         $('#reply-div').velocity('fadeIn',{ 
         duration: 35});
         }
         function openmore() {
                $('#more-div').velocity('fadeIn' ,{ 
         duration: 35});
         }

$( window ).on("load", function() {
        common();
});