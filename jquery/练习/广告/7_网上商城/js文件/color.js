{/* <script src="F:\work\LaoHeYa\jquery\jquery-1.12.4.js"></script> */}
//  $('#skin li').on('click',function(){
//      $('#skin').addClass('selected').siblings().removeClass('selected');
//      $('') 
//  })
$(function(){


    $('#jnBrandTab li').on('click',function(){
    
        $(this).addClass('chos').siblings().removeClass('chos');
        var index = $(this).index();
        var width = $('#jnBrandList li').outerWidth(true)*4;
        $('#jnBrandList').animate({
            left:-index*width
        },1000);
   
   
   
   
   })
   
   


})  


