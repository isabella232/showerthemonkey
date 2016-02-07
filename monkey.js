// ALL OF THIS CODE IS MONKEY SH*T, BUT IT'S A START
$(function() {

  function diff(x, y) {
      var centerItem = $('body'),
          centerLoc = centerItem.offset();
      var dx = x - (centerLoc.left + (centerItem.width() / 2));
          dy = y - (centerLoc.top + (centerItem.height() / 2));
      return Math.atan2(dy, dx) * (180 / Math.PI);
  }

  $('body').mousemove(function(e){
    var x = e.pageX;
    var y = e.pageY;
    console.log('move');

    var myAngle = diff(x, y) + 180;
    var rotationValue = 'rotate(' + myAngle + 'deg)';
    $("#pointer").css({
        '-moz-transform': rotationValue,
        '-webkit-transform': rotationValue,
        '-o-transform': rotationValue,
        '-ms-transform': rotationValue,
        'transform': rotationValue
    });
});

  // Changing the monkey's expression on click
  $('#frown').hide();
  $('body')
    .mousedown(function () {
      $('#face').hide();
      $('#frown').show();
    })
    .mouseup(function () {
      $('#frown').hide();
      $('#face').show();
    });
});
