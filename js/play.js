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
  var code = localStorage.getItem("room");


function getData() { firebase.database().ref("/"+code).on('value', function(snapshot) {  snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
  var firebase = childKey;
  var data = childData;
   //Start code
   var c1 = data[0];
   var c2 = data[1];
   var c3 = data[2];
   var c4 = data[3];
   var c5 = data[4];
   var c6 = data[5];
   var c7 = data[6];
   var c8 = data[7];
   var c9 = data[8];
   var c10 = data[9];

   document.getElementById("input_1").value = c1;
   document.getElementById("input_2").value = c2;
   document.getElementById("input_3").value = c3;
   document.getElementById("input_4").value = c4;
   document.getElementById("input_5").value = c5;
   document.getElementById("input_6").value = c6;
   document.getElementById("input_7").value = c7;
   document.getElementById("input_8").value = c8;
   document.getElementById("input_9").value = c9;

   //End code
} });  }); }
getData();

  function ab(){
    if(player == "player1"){
        document.getElementById("input_1").value = "O";
    }
    else if(player == "player2"){
        document.getElementById("input_1").value = "X"; 
    }
    check();
  }

  function bb(){
    if(player == "player1"){
        document.getElementById("input_2").value = "O";
    }
    else if(player == "player2"){
        document.getElementById("input_2").value = "X"; 
    }
    check();
  }

  function cb(){
    if(player == "player1"){
        document.getElementById("input_3").value = "O";
    }
    else if(player == "player2"){
        document.getElementById("input_3").value = "X"; 
    }
    check();
  }

  function db(){
    if(player == "player1"){
        document.getElementById("input_4").value = "O";
    }
    else if(player == "player2"){
        document.getElementById("input_4").value = "X"; 
    }
    check();
  }

  function eb(){
    if(player == "player1"){
        document.getElementById("input_5").value = "O";
    }
    else if(player == "player2"){
        document.getElementById("input_5").value = "X"; 
    }
    check();
  }

  function fb(){
    if(player == "player1"){
        document.getElementById("input_6").value= "O";
    }
    else if(player == "player2"){
        document.getElementById("input_6").value = "X"; 
    }
    check();
  }

  function gb(){
    if(player == "player1"){
        document.getElementById("input_7").value = "O";
    }
    else if(player == "player2"){
        document.getElementById("input_7").value = "X"; 
    }
    check();
  }

  function hb(){
    if(player == "player1"){
        document.getElementById("input_8").value = "O";
    }
    else if(player == "player2"){
        document.getElementById("input_8").value = "X"; 
    }
    check();
  }

  function ib(){
    if(player == "player1"){
        document.getElementById("input_9").value = "O";
    }
    else if(player == "player2"){
        document.getElementById("input_9").value = "X"; 
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
      document.getElementById("input_1").value,
      document.getElementById("input_2").value,
      document.getElementById("input_3").value,
      document.getElementById("input_4").value,
      document.getElementById("input_5").value,
      document.getElementById("input_6").value,
      document.getElementById("input_7").value,
      document.getElementById("input_8").value,
      document.getElementById("input_9").value,
      player
    ];



    firebase.database().ref(code).update({
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
    });
      
  }

