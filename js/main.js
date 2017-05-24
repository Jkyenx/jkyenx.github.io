$(document).ready(function(){
  let tab = "";
  let hometab = "";
  let hometablnk = "";

  $('#links').click(function(event){
      var tar = event.target;
      hometablnk = "#"+hometab;
       //event.preventDefault();
      if(tar.innerHTML === 'Home'){
        $(location).attr('href','index.html');
        //  $(tab).fadeOut(300, function(){
        //    home();
        //    tar.innerHTML = hometab;
        //    tab = "";
        //  });
        //alert(window.location.href);
      } else {

           switch(tar.id){
             case 'About':
               if(tab === ""){
                  hidecont(function(){
                 $('#aboutpage').fadeIn(1000);
                 tar.innerHTML = 'Home';
                 hometab = "About";
                  });
                } else {
                  $(tab).fadeOut(500);
                    $("#links").removeClass('linksanimation').css('opacity','1').fadeTo(500,0, function(){
                        $('#aboutpage').fadeIn(1000);
                        $(hometablnk).text(hometab);
                        $("#"+tar.id).text("Home");
                        $(this).css('opacity','0').fadeTo(1000, 1);
                        hometab = "About";


                  });
                  //tar.innerHTML = 'Home';
                }
               tab = '#aboutpage';

               break;
            case 'Projects':
              if(tab === ""){
                hidecont(function(){
               $('#projectpage').fadeIn(2000);
               tar.innerHTML = 'Home';
               hometab = "Projects";
                });
              } else {
                $(tab).fadeOut(500);
                $("#links").removeClass('linksanimation').css('opacity','1').fadeTo(500,0, function(){
                    $('#projectpage').fadeIn(1000);
                    $(hometablnk).text(hometab);
                    $("#"+tar.id).text("Home");
                    $(this).css('opacity','0').fadeTo(1000, 1);
                    hometab = "Projects";
              });
              }
                tab = '#projectpage';

                break;
            case 'Resume':
                if(tab === ""){
                  hidecont(function(){
                 $('#resumepage').fadeIn(2000);
                 tar.innerHTML = 'Home';
                 hometab = "Resume";
                  });
                } else {
                  $(tab).fadeOut(500);
                  $("#links").removeClass('linksanimation').css('opacity','1').fadeTo(500,0, function(){
                      $('#resumepage').fadeIn(1000);
                      $(hometablnk).text(hometab);
                      $("#"+tar.id).text("Home");
                      $(this).css('opacity','0').fadeTo(1000, 1);
                      hometab = "Resume";
                });
                }
                tab = '#resumepage';
                break;
            case 'Contact':
                if(tab === ""){
                  hidecont(function(){
                 $('#contactpage').fadeIn(2000);
                 tar.innerHTML = 'Home';
                 hometab = "Contact";
                  });
                } else {
                  $(tab).fadeOut(500);
                  $("#links").removeClass('linksanimation').css('opacity','1').fadeTo(500,0, function(){
                      $('#contactpage').fadeIn(1000);
                      $(hometablnk).text(hometab);
                      $("#"+tar.id).text("Home");
                      $(this).css('opacity','0').fadeTo(1000, 1);
                      hometab = "Contact";
                });
                }
                tab = '#contactpage';
                break;
           }

      }
  });

  function hidecont(callback){
    if($(window).width() > 420) {
    $('#logo').removeClass('logoanimate').css('opacity','1').fadeTo('slow',0).slideUp(
      function(){
        $('#home').animate({
          left: '45%',
          top: '13%'
        }, 800);
        //if($(window).width() < 1400){
        // $('#home').addClass('activated');
        $('#links').children().animate({paddingRight: '3%'}, 800, function(){
          //$('#links').css({position: 'fixed', backgroundColor: 'black', zIndex: '1'});
        });
      //} else {
        //$('#links').children().animate({paddingRight: '4%'}, 800, function(){
          //$('#links').css({position: 'fixed', backgroundColor: 'black', zIndex: '1'});
        //});
      //}
        callback();
    });
  } else {
    $('#home').css('opacity', '0').animate({
      top: '100%'
    },1, function(){
        $('#logo').removeClass('logoanimate').css('opacity','1').fadeTo(1,0).slideUp(function(){
          $('#home').fadeTo('slow','1');
          $('#home').css('position','fixed');
          callback();
        });


    });
  }
  }

  function home(callback){
      $('#links').children().animate({paddingRight: '-30px', right: '30px'}, 1300);
      $('#home').animate({
        top: '50%',
        left: '50%'
      }, 1000, function(){

        $('#logo').css('opacity','1').fadeIn(1500);
        callback();
      });

  }

});

//animate({ height: 'toggle', opacity: 'toggle' }, 'slow'
// jQuery.fn.fadeThenSlideToggle = function(speed, easing, callback) {
//   if (this.is(":hidden")) {
//     return this.slideDown(speed, easing).fadeTo(speed, 1, easing, callback);
//   } else {
//     return this.fadeTo(speed, 0, easing).slideUp(speed, easing, callback);
//   }
// };
