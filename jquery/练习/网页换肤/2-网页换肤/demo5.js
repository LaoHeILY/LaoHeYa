
$(function(){
  $('#skin li').on('click',function(){
      $(this).addClass('selected').siblings().removeClass('selected');
      var index = $(this).index();

    $('#cssfile').attr('href','css/'+'skin_'+ index +'.css');//对h1更改路径没有效果，是对引入的css更改路径
   
    setCookie()


  })
  var skin = getCookie('');

  //存储当前皮肤
  function setCookie(attr,value,day){
    var str ='';
    str += attr+"="+value+";";
    if(day){
    var date = new Date();
    var today = date.getDate();
    date.setDate(today+ day);
    str+="expires="+date;
}
document.cookie = str;

}
function getCookie(key){
  var str = document.cookie;
  var arr = str.split('; ');
  for(var i = 0; i<arr.length;i++){
  var arr1 = arr[i].split('=');
  if(arr1[0]==key){
     return  arr1[1];
  }
  
  }

 return "";

}


})