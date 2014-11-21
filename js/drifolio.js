//==========================================================
//Replace srizon with your dribbble username
//==========================================================
$.jribbble.getShotsByPlayerId('srizon', function (playerShots) {
    var html = [];


//========================
//PORTFOLIO SETUP
//========================
    $.each(playerShots.shots, function (i, shot) {
        html.push('<li><a href="' + shot.url + '">');
        html.push('<img src="' + shot.image_teaser_url + '" ');
        html.push('alt="' + shot.title + '"></a>');
        html.push('<h3><a href="' + shot.url + '">' + shot.title + '</h3>');
        html.push('<div class="likecount"><span class="icon-heart"></span> ' + shot.likes_count + '</div>');
        html.push('<div class="commentcount"><span class="icon-bubbles"></span> ' + shot.comments_count + '</a></li></div>');
    });

    $('#shotsByPlayerId').html(html.join(''));
}, {page: 1, per_page: 9});



//========================
//PRELOADER
//========================
$(window).load(function() { // makes sure the whole site is loaded
	$('#status').fadeOut(); // will first fade out the loading animation
	$('#preloader').delay(350).fadeOut('slow');
    // will fade out the white DIV that covers the website.
	$('body').delay(350).css({'overflow':'visible'});
})
//========================
//CUSTOM SCROLLBAR
//========================
$("html").niceScroll({
    mousescrollstep: 70,
    cursorcolor: "#ea9312",
    cursorwidth: "5px",
    cursorborderradius: "10px",
    cursorborder: "none",
});


//========================
//SMOOTHSCROLL
//========================
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


//========================
//NAVBAR
//========================
(function ($) {
  $(document).ready(function(){

    // hide .navbar first
    $(".navbar").hide();

    // fade in .navbar
    $(function () {
        $(window).scroll(function () {

                 // set distance user needs to scroll before we start fadeIn
            if ($(this).scrollTop() > 40) {
                $('.navbar')
                .removeClass('animated fadeOutUp')
                .addClass('animated fadeInDown')
                .fadeIn();
                
            } else {
                $('.navbar')
                .removeClass('animated fadeInDown')
                .addClass('animated fadeOutUp')
                .fadeOut();
            }
        });
    });

});
  }(jQuery));

//========================
//icon hover effect
//========================
$('#services img').hover(
       function(){ $(this).addClass('animated pulse') },
       function(){ $(this).removeClass('animated pulse') })