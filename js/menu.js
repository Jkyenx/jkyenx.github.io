$(document).ready(function(){
    
    
    $(".bmenu").on("click", function(){
       
        //$("nav").css("transition", "transform 0.4s ease");
        //$("nav").addClass("activated-nav");
        //$(".wrapper").toggleClass("active-nav");
        
        //$("body").toggleClass("active-nav");
        $("body").addClass("activated-nav").toggleClass("active-nav");
        //alert("yo");
        
    });
    
      $("body").scroll(function() {
          if ($("body").hasClass("active-nav")){
              //alert("bruh");
              $("body").toggleClass("active-nav");
          }
            
    });
    
    $(".wrapper").on("click", function(){
        if ($("body").hasClass("active-nav")){
                
              $("body").toggleClass("active-nav");
          }
        
    });
    
    $(window).on('resize', function() {
       windowWidth = $(this).width();
        if (windowWidth > 773) {
            $("body").removeClass("activated-nav");
        }
    });
    
    /*$("nav").on("transitioned", function(){
       $(this).removeClass("activated-nav"); 
    });*/
});