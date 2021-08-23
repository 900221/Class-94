
  var firebaseConfig = {
    apiKey : "AIzaSyAfdB4xJ09jIj62EXLeiwEeS4Oblcrxnbs",
    authDomain: "class-94-e9ae3.firebaseapp.com",
    databaseURL: "https://class-94-e9ae3-default-rtdb.firebaseio.com",
    projectId: "class-94-e9ae3",
    storageBucket: "class-94-e9ae3.appspot.com",
    messagingSenderId: "555711321433",
    appId: "1:555711321433:web:5335b58d268e2acaa5e848"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}