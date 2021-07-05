// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD-AXIRSjFPeUKENqW6SA1vDwEZu3z78zU",
    authDomain: "tic-tac-toe-33868.firebaseapp.com",
    databaseURL: "https://tic-tac-toe-33868-default-rtdb.firebaseio.com",
    projectId: "tic-tac-toe-33868",
    storageBucket: "tic-tac-toe-33868.appspot.com",
    messagingSenderId: "903688280126",
    appId: "1:903688280126:web:fdac64e9eaac97187e996f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var player = "player1";

  function ab(){
    if(player == "player1"){
        document.getElementById("1").innerHTML = "O";
    }
    else if(player == "player2"){
        document.getElementById("1").innerHTML = "X"; 
    }
    check();
  }

  function bb(){
    if(player == "player1"){
        document.getElementById("2").innerHTML = "O";
    }
    else if(player == "player2"){
        document.getElementById("2").innerHTML = "X"; 
    }
    check();
  }

  function cb(){
    if(player == "player1"){
        document.getElementById("3").innerHTML = "O";
    }
    else if(player == "player2"){
        document.getElementById("3").innerHTML = "X"; 
    }
    check();
  }

  function db(){
    if(player == "player1"){
        document.getElementById("4").innerHTML = "O";
    }
    else if(player == "player2"){
        document.getElementById("4").innerHTML = "X"; 
    }
    check();
  }

  function eb(){
    if(player == "player1"){
        document.getElementById("5").innerHTML = "O";
    }
    else if(player == "player2"){
        document.getElementById("5").innerHTML = "X"; 
    }
    check();
  }

  function fb(){
    if(player == "player1"){
        document.getElementById("6").innerHTML = "O";
    }
    else if(player == "player2"){
        document.getElementById("6").innerHTML = "X"; 
    }
    check();
  }

  function gb(){
    if(player == "player1"){
        document.getElementById("7").innerHTML = "O";
    }
    else if(player == "player2"){
        document.getElementById("7").innerHTML = "X"; 
    }
    check();
  }

  function hb(){
    if(player == "player1"){
        document.getElementById("8").innerHTML = "O";
    }
    else if(player == "player2"){
        document.getElementById("8").innerHTML = "X"; 
    }
    check();
  }

  function ib(){
    if(player == "player1"){
        document.getElementById("9").innerHTML = "O";
    }
    else if(player == "player2"){
        document.getElementById("9").innerHTML = "X"; 
    }
    check();
  }

  function check(){
    console.log("run")
    if(player == "player1"){
        player = "player2"
    }
    else if(player == "player2"){
        player = "player1"
    }

    var interger = [
      document.getElementById("1").value,
      document.getElementById("2").value,
      document.getElementById("3").value,
      document.getElementById("4").value,
      document.getElementById("5").value,
      document.getElementById("6").value,
      document.getElementById("7").value,
      document.getElementById("8").value,
      document.getElementById("9").value,
      player
    ];

    var code = localStorage.getItem("code");

    firebase.database().ref("/").child(code).update({
      purpose: "adding room"
    });

    firebase.database().ref(code).push({
      1: interger[0],
      2: interger[1],
      3: interger[2],
      4: interger[3],
      5: interger[4],
      6: interger[5],
      7: interger[6],
      8: interger[7],
      9: interger[8],
      10: interger[9]
    })
  }
