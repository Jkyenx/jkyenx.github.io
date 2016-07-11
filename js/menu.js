$(document).ready(function(){
    
    
    $(".bmenu").on("click", function(){
       
        //$("nav").css("transition", "transform 0.4s ease");
        //$("nav").addClass("activated-nav");
        //$(".wrapper").toggleClass("active-nav");
        
        $("body").toggleClass("active-nav");
        //alert("yo");
        
    });
    
      $(window).scroll(function() {
          if ($("body").hasClass("active-nav")){
              $("body").toggleClass("active-nav");
          }
            
    });
    
    $(".wrapper").on("click", function(){
        if ($("body").hasClass("active-nav")){
              $("body").toggleClass("active-nav");
          }
        
    });
    
    /*$(window).on('resize', function() {
       if(Modernizr.mq) 
    });*/
    
    /*$("nav").on("transitioned", function(){
       $(this).removeClass("activated-nav"); 
    });*/
});