// <!-- SCRIPTS -->
$(document).ready(function(){
    
$(window).scroll(function(){
    if($(this).scrollTop()> 40){
        $('#btntop').fadeIn ();

    } else{
        $('#btntop').fadeOut (); 
    }

});
    
    $("#btntop").click(function(){
        $('html ,body').animate({scrollTop :0},50);
    });
});






 