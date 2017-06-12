$(function(){
  mentoringBubbleClick();
});

function mentoringBubbleClick(){
   $('.face').on('click', function(){
     var $this = $(this);
     var faceTop = $this.position().top;
     vertMath = -1 * (faceTop - 230);

     console.log(vertMath);

     $this.parent().css('top', vertMath + 'px');

      $this.addClass('has-bubble-open')
        .siblings().removeClass('has-bubble-open');

   });
}

$(window).scroll(function(){
  youtubeVidScroll();
  startMentoring();
});

function startMentoring(){
  if($('section.mentoring').offset().top < $(window).scrollTop() + 400){
    $('.faces').addClass('launched');


    setTimeout(function(){
      $('.face:nth-child(3)').addClass('has-bubble-open');
    }, 300);
  }


}


function youtubeVidScroll(){
  var wScroll = $(window).scrollTop();
  parallaxScroll = wScroll/10;

  $('.video-strip').css('background-position', 'center -' + wScroll + 'px');
}
