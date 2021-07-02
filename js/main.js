  var gameId = "";

  function createRoom(){
    var code = document.getElementById("code").value;
      if(code == ""){
          console.log("no")
          window.alert("Please enter code");
      }
      else{
          gameId = code;
          window.location = "tic-tac.html";
          console.log(gameId);
          localStorage.setItem("code", gameId);
      }
  }