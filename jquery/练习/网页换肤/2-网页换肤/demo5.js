$(function(){
  $('#skin li').on('click',function(){
      $(this).addClass('selected').siblings().removeClass('selected');
      var index = $(this).index();

    $('#cssfile').attr('href','css/'+'skin_'+ index +'.css');//对h1更改路径没有效果，是对引入的css更改路径
       
  })


})