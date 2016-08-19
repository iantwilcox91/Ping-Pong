$(function() {
  $("form#pingpongform").submit(function(event) {
    event.preventDefault();
    var userInputNumber = $("input#inputnumber").val();
    var returnValue = pingpong(userInputNumber);
    $("#result").text(returnValue);
  });
});





var pingpong = function(userInputNumber) {
  var result = "";
  for (var i = parseInt(userInputNumber); i > 0 ; i--) {
    alert(userInputNumber);
    result = userInputNumber;
    return result;
    }
};
