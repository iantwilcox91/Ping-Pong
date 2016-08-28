// business logic
var finalArrayForShowing = []

var pingpong = function(userInputNumber) {
  var userInputNumber = $("input#inputnumber").val();
  for (var i = parseInt(userInputNumber); i > 0 ; i--) {
    if ( i % 15 === 0 ){
      var newLength = finalArrayForShowing.push("ping-pong");
      userInputNumber = userInputNumber - 1;
    } else if ( i % 5 === 0 ){
      var newLength = finalArrayForShowing.push("pong");
      userInputNumber = userInputNumber - 1;
    } else if ( i % 3 === 0 ){
      var newLength = finalArrayForShowing.push("ping");
      userInputNumber = userInputNumber - 1;
    } else if ( i > 0 ){
      var newLength = finalArrayForShowing.push(i);
      userInputNumber = userInputNumber - 1;
    }
  }
};

var clear = function() {
  $( ".result" ).empty();
  finalArrayForShowing = []
}


// user interface logic?
$(function() {
  $("form#pingpongform").submit(function(event) {
    event.preventDefault();
    clear();
    pingpong();
    finalArrayForShowing.forEach(function (item, index, array) {
      $("ul.result").append("<li>" + item + "</li>");
    });
  });
});
