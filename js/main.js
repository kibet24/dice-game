$ (document).ready(
  function () {
    var player1;

    $("form#player1-name").submit(function (event) {
      event.preventDefault();
      console.log("Hey");
      var name1= $("player1").val();
      console.log(name1);
    })
  }
)
