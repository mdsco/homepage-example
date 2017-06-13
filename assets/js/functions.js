$(function(){
  mentoringBubbleClick();
});

function mentoringBubbleClick(){
    $('.face').on('click', function(){
      var $this = $(this);
      var faceTop = $this.position().top;
      vertMath = -1 * (faceTop - 230);

      var faceLeft = $this.position().left;
      horzMath =  0 - faceLeft;

      if($(window).width() > 640){
        $this.parent().css('top', vertMath + 'px');
      } else {
        if($this.hasClass('back-btn')){
          // $this.parent().css('left', 0 + 'px');
          mentoringNarrowStart();
          $('.faces li').first().addClass('has-bubble-open')
              .siblings().removeClass('has-bubble-open');
        } else {
          $this.parent().css('left', horzMath + 'px');
        }
      }
      if(!$this.hasClass('back-btn')){

        $this.addClass('has-bubble-open')
          .siblings().removeClass('has-bubble-open');
      }
   });
}

$(window).scroll(function(){
  youtubeVidScroll();
  startMentoring();
});

function startMentoring(){
  if($('section.mentoring').offset().top < $(window).scrollTop() + 400
     && $(window).width() > 640){
    $('.faces').addClass('launched');
  } else if($(window).width() <= 640) {
    $('.face:nth-child(1)').addClass('has-bubble-open');
  }

  if(!$('.face').hasClass('has-bubble-open')){
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

function mentoringNarrowStart(){
  $('.faces').css({
    'top': '0px',
    'left': '0px'
  });

  $('.face').first().addClass('has-bubble-open')
      .siblings().removeClass('has-bubble-open');
}

function mentoringWideStart(){
  $('.faces').css({
    'top': '0px',
    'left': '0px'
  });

  $('.face:nth-child(3)').addClass('has-bubble-open')
      .siblings().removeClass('has-bubble-open');

}

$(window).resize(function(){
  if ($(window).width() < 640) {
    mentoringNarrowStart();
  } else {
    mentoringWideStart();
  }
});
