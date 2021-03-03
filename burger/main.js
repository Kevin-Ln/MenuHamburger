$(".hamburger").click(function(){
    if( $("#container").hasClass("menuhide")) {
        $("#container").removeClass("menuhide");
        $("#container").addClass("menushow");
    }else{
        $("#container").removeClass("menushow");
        $("#container").addClass("menuhide");
    }
 
   });