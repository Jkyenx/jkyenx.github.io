$(document).ready(function(){
  let tab = "";
  let hometab = "";
  let hometablnk = "";
  let active = false;
  let prevright = 0;



  $('#links').click(function(event){
      var tar = event.target;
      hometablnk = "#"+hometab;
       //event.preventDefault();
      if(tar.innerHTML === 'Home'){
        $(location).attr('href','index.html');

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
    if($(window).width() > 736) {
    $('#logo').removeClass('logoanimate').css('opacity','1').fadeTo('slow',0).slideUp(
      function(){
        $('#home').animate({
          left: '45%',
          top: '13%'
        }, 800);
        //if($(window).width() < 1400){
        // $('#home').addClass('activated');
        $('#links').children().animate({paddingRight: '5%'}, 800, function(){
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
          // $('#home').fadeTo('slow','1');
          // $('#home').css('position','fixed');
          $('#bottomnav').fadeIn('slow');
          callback();
        });


    });
  }
  }

  $('#navbut').on('click', function(){
      if(!active){
      prevright = $('#bottomnav').css('right');
      //alert(prevright);
      $('#bottomnav').animate({borderRadius: '0%', right: '0', width: '100%'});
      active = true;
      $('#bottomnav a').css('visibility', 'visible');
    } else {
      $('#bottomnav').animate({borderRadius: '50%', right: prevright, width: '17%'},function(){
        $('#bottomnav a').css('visibility', 'hidden');
      });
      active = false;
    }
  });


  $('#links2').click(function(event){
    switch(event.target.innerHTML){
      case 'About':
        if(tab === "") {
          hidecont(function(){
         $('#aboutpage').fadeIn(1000);
         $('#bottomnav').animate({borderRadius: '50%', right: prevright, width: '17%'},function(){
           $('#bottomnav a').css('visibility', 'hidden');
         });
         document.getElementById("About").innerHTML = 'Home';
         hometab = "About";
          });
        } else if(tab !== '#aboutpage') {
            $(tab).fadeOut(500);
            $('#bottomnav').animate({borderRadius: '50%', right: prevright, width: '17%'},function(){
              $('#bottomnav a').css('visibility', 'hidden');
              $('#aboutpage').fadeIn();
            });
            document.getElementById("About").innerHTML = 'Home';
            hometab = "About";
        }
        tab = '#aboutpage';
        break;
      case 'Projects':
        if(tab === "") {
          hidecont(function(){
         $('#projectpage').fadeIn(1000);
         $('#bottomnav').animate({borderRadius: '50%', right: prevright, width: '17%'},function(){
           $('#bottomnav a').css('visibility', 'hidden');
         });
         document.getElementById("Projects").innerHTML = 'Home';
         hometab = "Projects";
          });
        } else if(tab !== '#aboutpage') {
            $(tab).fadeOut(500);
            $('#bottomnav').animate({borderRadius: '50%', right: prevright, width: '17%'},function(){
              $('#bottomnav a').css('visibility', 'hidden');
              $('#projectpage').fadeIn();
            });
            document.getElementById("Projects").innerHTML = 'Home';
            hometab = "Projects";
        }
        tab = '#projectpage';
        break;
      case 'Resume':
        if(tab === "") {
          hidecont(function(){
         $('#resumepage').fadeIn(1000);
         $('#bottomnav').animate({borderRadius: '50%', right: prevright, width: '17%'},function(){
           $('#bottomnav a').css('visibility', 'hidden');
         });
         document.getElementById("Resume").innerHTML = 'Home';
         hometab = "Resume";
          });
        } else if(tab !== '#resumepage') {
            $(tab).fadeOut(500);
            $('#bottomnav').animate({borderRadius: '50%', right: prevright, width: '17%'},function(){
              $('#bottomnav a').css('visibility', 'hidden');
              $('#resumepage').fadeIn();
            });
            document.getElementById("Resume").innerHTML = 'Home';
            hometab = "Resume";
        }
        tab = '#resumepage';
        break;
      case 'Contact':
        if(tab === "") {
          hidecont(function(){
         $('#contactpage').fadeIn(1000);
         $('#bottomnav').animate({borderRadius: '50%', right: prevright, width: '17%'},function(){
           $('#bottomnav a').css('visibility', 'hidden');
         });
         document.getElementById("Contact").innerHTML = 'Home';
         hometab = "Contact";
          });
        } else if(tab !== '#contactpage') {
            $(tab).fadeOut(500);
            $('#bottomnav').animate({borderRadius: '50%', right: prevright, width: '17%'},function(){
              $('#bottomnav a').css('visibility', 'hidden');
              $('#contactpage').fadeIn();
            });
            document.getElementById("Contact").innerHTML = 'Home';
            hometab = "Contact";
        }
        tab = '#contactpage';
        break;
      }
  });


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


  $(window).on('resize', function() {
       windowWidth = $(this).width();
        if (windowWidth < 740) {
            $("#links").css('display','none');
            $("#bottomnav").css('display','inherit');
        } else {
            $("#links").removeClass('linksanimation').css({display: 'inherit', opacity: "1"});
            $("#bottomnav").css('display','none');
        }
    });

    // window.onorientationchange = function() {
    //   $('#logo').removeClass('logoanimate').css('opacity','1');
    //   window.location.reload();
    // };

});



// window.onorientationchange = function() { window.location.reload(); };

//animate({ height: 'toggle', opacity: 'toggle' }, 'slow'
// jQuery.fn.fadeThenSlideToggle = function(speed, easing, callback) {
//   if (this.is(":hidden")) {
//     return this.slideDown(speed, easing).fadeTo(speed, 1, easing, callback);
//   } else {
//     return this.fadeTo(speed, 0, easing).slideUp(speed, easing, callback);
//   }
// };