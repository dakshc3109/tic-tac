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

  function addRoom(){
    firebase.database().ref("/").child(code).update({
      purpose : "adding room"
    });
  }

function getData() { firebase.database().ref("/"+code).on('value', function(snapshot) {  snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
  var firebase = childKey;
  var data = childData;

  /*console.log(value);
  var data_array = [];
  data_array.push(data);
  console.log(data_array);
   //Start code
   /*var c1 = data_array[0];
   var c2 = data_array[1];
   var c3 = data_array[2];
   var c4 = data_array[3];
   var c5 = data_array[4];
   var c6 = data_array[5];
   var c7 = data_array[6];
   var c8 = data_array[7];
   var c9 = data_array[8];
   var c10 = data_array[9];*/
   
   for(var i=0; i< data.length; i++){
    //console.log(document.getElementById("input_"+i).innerHTML);
    document.getElementById("input_"+i).innerHTML = data[i];    
   }
   

   //End code
} });  }); }
//getData();

  function ab(){
    if(player == "player1"){        
        document.getElementById("input_1").innerHTML = "O";
    }
    else if(player == "player2"){      
        document.getElementById("input_1").innerHTML = "X";
    }
    check();
  }

  function bb(){
    if(player == "player1"){
        document.getElementById("input_2").innerHTML = "O";
    }
    else if(player == "player2"){
        document.getElementById("input_2").innerHTML = "X"; 
    }
    check();
  }

  function cb(){
    if(player == "player1"){
        document.getElementById("input_3").innerHTML = "O";
    }
    else if(player == "player2"){
        document.getElementById("input_3").innerHTML = "X"; 
    }
    check();
  }

  function db(){
    if(player == "player1"){
        document.getElementById("input_4").innerHTML = "O";
    }
    else if(player == "player2"){
        document.getElementById("input_4").innerHTML = "X"; 
    }
    check();
  }

  function eb(){
    if(player == "player1"){
        document.getElementById("input_5").innerHTML = "O";
    }
    else if(player == "player2"){
        document.getElementById("input_5").innerHTML = "X"; 
    }
    check();
  }

  function fb(){
    if(player == "player1"){
        document.getElementById("input_6").innerHTML= "O";
    }
    else if(player == "player2"){
        document.getElementById("input_6").innerHTML = "X"; 
    }
    check();
  }

  function gb(){
    if(player == "player1"){
        document.getElementById("input_7").innerHTML = "O";
    }
    else if(player == "player2"){
        document.getElementById("input_7").innerHTML = "X"; 
    }
    check();
  }

  function hb(){
    if(player == "player1"){
        document.getElementById("input_8").innerHTML = "O";
    }
    else if(player == "player2"){
        document.getElementById("input_8").innerHTML = "X"; 
    }
    check();
  }

  function ib(){
    if(player == "player1"){
        document.getElementById("input_9").innerHTML = "O";
    }
    else if(player == "player2"){
        document.getElementById("input_9").innerHTML = "X"; 
    }
    check();
  }

 

  function check(){

    //console.log("run")
    if(player == "player1"){
        player = "player2"
    }
    else if(player == "player2"){
        player = "player1"
    }

    var input = [
      document.getElementById("input_1").innerHTML,
      document.getElementById("input_2").innerHTML,
      document.getElementById("input_3").innerHTML,
      document.getElementById("input_4").innerHTML,
      document.getElementById("input_5").innerHTML,
      document.getElementById("input_6").innerHTML,
      document.getElementById("input_7").innerHTML,
      document.getElementById("input_8").innerHTML,
      document.getElementById("input_9").innerHTML,
      player
    ];



    firebase.database().ref(code).update({
      0: input[0],
      1: input[1],
      2: input[2],
      3: input[3],
      4: input[4],
      5: input[5],
      6: input[6],
      7: input[7],
      8: input[8],
      9: input[9]
    });
      
    if(input[0] == input[1] & input[1] == input[2]){
      window.alert(input[0] + " wins!");
      setTimeout(function(){
        window.location = "index.html";
      },5000);
    }
    if(input[3] == input[4] & input[4] == input[5]){
      window.alert(input[3] + " wins!");
      setTimeout(function(){
        window.location = "index.html";
      },5000);
    }
    if(input[6] == input[7] & input[7] == input[8]){
      window.alert(input[6] + " wins!");
      setTimeout(function(){
        window.location = "index.html";
      },5000);
    }
    if(input[0] == input[3] & input[3] == input[6]){
      window.alert(input[0] + " wins!");
      setTimeout(function(){
        window.location = "index.html";
      },5000);
    }
    if(input[1] == input[4] & input[4] == input[7]){
      window.alert(input[1] + " wins!");
      setTimeout(function(){
        window.location = "index.html";
      },5000);
    }
    if(input[2] == input[5] & input[5] == input[8]){
      window.alert(input[2] + " wins!");
      setTimeout(function(){
        window.location = "index.html";
      },5000);
    }
    if(input[0] == input[4] & input[4] == input[8]){
      window.alert(input[0] + " wins!");
      setTimeout(function(){
        window.location = "index.html";
      },5000);
    }
    if(input[2] == input[4] & input[4] == input[6]){
      window.alert(input[0] + " wins!");
      setTimeout(function(){
        window.location = "index.html";
      },5000);
    }

    if(input[0] != 1 & input[1] != 2 & input[2] != 3 & input[3] != 4 & input[4] != 5 & input[5] != 6 & input[6] != 7 & input[7] != 8 & input[8] != 9 ){
      window.alert(" Oh it's a tie!");
      setTimeout(function(){
        window.location = "index.html";
      },5000);
    }
  }

