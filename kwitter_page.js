var firebaseConfig = {
      apiKey: "AIzaSyBT2pRSA5IDQBdyzCvaTTlfS-B8Yf1zns0",
      authDomain: "espoco-f1f1b.firebaseapp.com",
      databaseURL: "https://espoco-f1f1b-default-rtdb.firebaseio.com",
      projectId: "espoco-f1f1b",
      storageBucket: "espoco-f1f1b.appspot.com",
      messagingSenderId: "222587612508",
      appId: "1:222587612508:web:dad323d15660050af0e599"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
var user_name=localStorage.getItem("user_name");
var room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data ['name'];
message = message_data ['message'];
like = message_data ['like'];
namewithtag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
messagewithtag="<h4 class='message_h4'>"+message+"</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike5(this.id)'>";

spanwithtag="<span class='glyphicon glyphicon-thumbs-up'>Like:"+like+"</span></button><hr>";
row = namewithtag+messagewithtag+like_button+spanwithtag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();
function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value ="";
}

function updateLike5(message_id) {
console.log(message_id);
button_id = message_id;
likes = document.getElementById(button_id).value;
updated_likes = Number(likes) +1;
console.log(updated_likes);
firebase.database().ref(room_name).child(message_id).update({
      like:updated_likes
});
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location ="index.html";
}
