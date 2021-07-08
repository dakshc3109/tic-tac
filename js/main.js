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

  function createRoom(){
    var room = document.getElementById("code").value;
    firebase.database().ref("/").child(room).update({
      purpose: "adding room"
    });
    localStorage.setItem("room", room);
    window.location = "tic-tac.html"
  }