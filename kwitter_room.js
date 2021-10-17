
var firebaseConfig = {
  apiKey: "AIzaSyCPeuM-FxvNrIzqi5NRId4Nhb7dfXfQJcE",
  authDomain: "lets-chat-b6753.firebaseapp.com",
  databaseURL: "https://lets-chat-b6753-default-rtdb.firebaseio.com",
  projectId: "lets-chat-b6753",
  storageBucket: "lets-chat-b6753.appspot.com",
  messagingSenderId: "764716277121",
  appId: "1:764716277121:web:c2ad8b1c29902513d45c80",
  measurementId: "G-V65R163D4K"
};

firebase.initializeApp(firebaseConfig);
function getData(){
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log("Room name-" + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });
    });
    }
    getData();
    
    function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });
    
      localStorage.setItem("room_name", room_name);
    
      window.location = "kwitter_page.html";
    }
    
    function redirectToRoomName(name)
    {
      console.log(name);
      localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html";
    }
    
    function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
       window.location="index.html";
    }