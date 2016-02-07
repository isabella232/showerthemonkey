TRUMP.counter =(function(){
  var countNumber = 0;

  function requestSend(){
    $.ajax({
      url: "http://trumpdonald.org/counter.json"
    })
      .done(function(data) {
        requestCallback(data);
      });
  }

  function requestCallback(data) {
    if ( console && console.log ) {
      console.log( data);
    }
    countNumber = data.counter;
    if(data){
        setNumber();
        updateNumberInterval();
    }
  }

  function setNumber(){
    $('.counter-numbers').html(countNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
  }

  function updateNumberClick(){
    countNumber++;
    setNumber();
  }

  function updateNumberInterval() {
    setInterval(function(){
      countNumber += Math.floor(Math.random()*694*2)+1;
      setNumber();
    }, 5000)
  }

  requestSend();

  return{
    uNC: updateNumberClick
  }

})();
