 // Your web app's Firebase configuration
/* var firebaseConfig = {
  apiKey: "AIzaSyBOfwi94S3W0M6BISeMcl16talyAFVU_f4",
  authDomain: "tictactoe-daksh.firebaseapp.com",
  databaseURL: "https://tictactoe-daksh-default-rtdb.firebaseio.com",
  projectId: "tictactoe-daksh",
  storageBucket: "tictactoe-daksh.appspot.com",
  messagingSenderId: "641803149294",
  appId: "1:641803149294:web:ae74203cb8283d7f5d38ff"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);*/

  function createRoom(){
    var room = document.getElementById("code").value;    

    /*firebase.database().ref("/").child(room).update({
      purpose : "adding room"
    });*/

    localStorage.setItem("room", room);
    
    window.location = "tic-tac.html";
  }