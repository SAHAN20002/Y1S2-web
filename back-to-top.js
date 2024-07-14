
$(document).ready(function(){
  
  /*Back to top functions*/ 
  $(window).scroll(function () { /*Btn-Hide*/ 
        if ($(this).scrollTop() > 100) {
            $('#myBtn').fadeIn();
        } else {
            $('#myBtn').fadeOut();
        }
    });
 
  $('#myBtn').click(function () { /* Scroll-smooth*/ 
        $('html, body').animate({ scrollTop: 0 }, 600);
        return false;
    });
  /*Back to top functions*/ 

  /*index main image change function*/
  /*var imageSourse = ["Image/home/bigzenith1.jpg - Copy","Image/home/wallpaperflare.com_wallpaper (2).jpg","Image/home/bigzenith1.jpg - Copy (3)"];
  var currentIndex = 0;
  function changeImage(){
    $("#chnage-img").fadeOut('speed',function(){
      $(this).attr("background-image"," url("+imageSourse[currentIndex]+")").fadeIn('speed');
      currentIndex = (currentIndex + 1) % imageSourse.length;
    });

  }
  changeImage();
  setInterval(changeImage,500);
  /*index main image change function*/
  outer-text
  
    
});
document.addEventListener("DOMContentLoaded", function() {
  // Simulate content loading (you can replace this with your actual loading logic)
  setTimeout(function() {
    document.body.classList.add("loaded");
}, 500); // Adjust the timeout as needed // Adjust the timeout as needed
});
