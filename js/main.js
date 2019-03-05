
//Business Logic
var scores, currentScore, currentPlayer;
var player = [];
var rollBtn = $("#roll");
var holdBtn = $("#hold");

function roll() {
  var die = Math.floor(Math.random() * 6) + 1;
  $("#rollDice").text(die);
  if (die === 1) {
    alert (player[currentPlayer] + ", you rolled a one!");
    currentScore = 0;
    $("#current" + currentPlayer).text(currentScore);
    currentPlayer === 0 ? (currentPlayer = 1) : (currentPlayer = 0);
  } else {
    currentScore += die;
    $("#current" + currentPlayer).text(currentScore);
  }
}

function hold() {
  scores[currentPlayer] += currentScore;
  $("#score" + currentPlayer).text(scores[currentPlayer]);
  if (scores[currentPlayer] >= 100) {
    alert(player[currentPlayer] + "You WIN!");
    rollBtn.attr("disabled", "disabled");
    holdBtn.attr("disabled", "disabled");
  } else {
    currentScore = 0;
    $("#current" + currentPlayer).text(currentScore);
    currentPlayer === 0 ? (currentPlayer = 1) : (currentPlayer = 0);
  }
};
//U.I
$(document).ready(function() {
  init();
  rollBtn.click(roll);
  holdBtn.click(hold);
  newGame.click(init);

  $("players").submit(function(fn) {
    player[0] = $("#player1").val();
    player[1] = $("player2").val();
    $("#p1").text(player[0].toUpperCase());
    $("#p2").text(player[1].toUpperCase());
    if ($("#player1").val() === "" || $("player2").val() === "") {
      alert("Sign in first.");
    } else {
      $("Players").hide();
      $("#game").addClass("slide-active");
    }
    fn.preventDefault();
  });
});
