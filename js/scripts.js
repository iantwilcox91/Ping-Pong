$(function() {
  $("form#pingpongform").submit(function(event) {
    event.preventDefault();
    $( ".result" ).empty();
    var userInputNumber = $("input#inputnumber").val();
    pingpong(userInputNumber);
  });
});








var pingpong = function(userInputNumber) {
  for (var i = parseInt(userInputNumber); i > 0 ; i--) {

    if ( i % 3 === 0 ){
      $("ul.result").append("<li>" + "ping" + "</li>");
      userInputNumber = userInputNumber - 1;
    } else if ( i > 0 ){
      $("ul.result").append("<li>" + userInputNumber + "</li>");
      userInputNumber = userInputNumber - 1;
    }
  }
  return result;
};
