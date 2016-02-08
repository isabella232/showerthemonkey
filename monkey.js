// ALL OF THIS CODE IS MONKEY SH*T, BUT IT'S A START
$(function() {

  function diff(x, y) {
      var centerItem = $('body'),
          centerLoc = centerItem.offset();
      var dx = x - (centerLoc.left + (centerItem.width() / 2));
          dy = y - (centerLoc.top + (centerItem.height() / 2));
      return Math.atan2(dy, dx) * (180 / Math.PI);
  }

  $('#overlay').mousemove(function(e){
      var x = e.pageX;
      var y = e.pageY;

      var myAngle = diff(x, y) + 180;
      var rotationValue = 'rotate(' + myAngle + 'deg)';
      $('#hongbao').css({
          '-moz-transform': rotationValue,
          '-webkit-transform': rotationValue,
          '-o-transform': rotationValue,
          '-ms-transform': rotationValue,
          'transform': rotationValue
      });
  });

  function fire() {
    var bill = $('#bills img:not(.shoot):first');
    // $('#bills').append(bill);
    bill.addClass('shoot');
    bill.addClass('shoot-'+ (Math.floor(Math.random() * 7) + 1));
    setTimeout(function(){
      bill.addClass('hit');
    }, 30);
    setTimeout(function(){
      bill.attr('class', '');
    }, 400);
  }

  window.setInterval(function(){
    if (shooting) {
      fire();
      $('.monkey').css({
        bottom: (Math.floor(Math.random() * 14) + 1),
        left: (Math.floor(Math.random() * 14) + 1),
        right: (Math.floor(Math.random() * 14) + 1),
        top: (Math.floor(Math.random() * 14) + 1)
      });
    }
  }, 50);

  var shooting = false;
  $('#normal').trigger('play');

  // Changing the monkey's expression on click
  $('#frown').hide();
  $('#overlay')
    .mousedown(function () {
      shooting = true;
      $('#face').hide();
      $('#frown').show();
      fire();
      $('#scream').trigger('play');
      $('#normal').trigger('pause');
    })
    .mouseup(function () {
      shooting = false;
      $('#frown').hide();
      $('#face').show();
      $('#scream').trigger('pause');
      $('#normal').trigger('play');
      $('.monkey').css({
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
      });
    });
});
