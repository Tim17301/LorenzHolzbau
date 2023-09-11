//Flexslider
  $(window).on("load", function() {
    $('.flexslider').flexslider();
  });



  //Galerie Hover Effekt
  if ($(window).width() > 1000){
    $(".galerie-container .image1").hover(function(){
      $(".galerie-container .image1 > div").css("display", "block");
    }, function(){
      $(".galerie-container .image1 > div").css("display", "none");
    });

    $(".galerie-container .image2").hover(function(){
      $(".galerie-container .image2 > div").css("display", "block");
    }, function(){
      $(".galerie-container .image2 > div").css("display", "none");
    });

    $(".galerie-container .image3").hover(function(){
      $(".galerie-container .image3 > div").css("display", "block");
    }, function(){
      $(".galerie-container .image3 > div").css("display", "none");
    });

    $(".galerie-container .image4").hover(function(){
      $(".galerie-container .image4 > div").css("display", "block");
    }, function(){
      $(".galerie-container .image4 > div").css("display", "none");
    });

    $(".galerie-container .image5").hover(function(){
      $(".galerie-container .image5 > div").css("display", "block");
    }, function(){
      $(".galerie-container .image5 > div").css("display", "none");
    });

    $(".galerie-container .image6").hover(function(){
      $(".galerie-container .image6 > div").css("display", "block");
    }, function(){
      $(".galerie-container .image6 > div").css("display", "none");
    });

    $(".galerie-container .image7").hover(function(){
      $(".galerie-container .image7 > div").css("display", "block");
    }, function(){
      $(".galerie-container .image7 > div").css("display", "none");
    });
  }

//Hamburger Menu
let fixed = false;

    $("#hamburger").on("click", function(){
        $("#hamburger").toggleClass("is-active");
        $(".openMobileNav").toggleClass("closedMobileNav");
        $(".greyBoxOpen").toggleClass("greyBoxClosed");
        

        // Um den Body zu fixen, wenn mann das Menu geöffnet hat.
        /*
        if (fixed==false){
            fixed = true;
            $("body").css("position", "fixed");
        } else if (fixed==true){
            fixed = false;
            $("body").css("position", "");
        }
        */
    });





