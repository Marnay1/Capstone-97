user_name= localStorage.getItem("user_name");
document.getElementById("username").innerHTML= "Welcome" + user_name;
var firebaseConfig = {
  apiKey: "AIzaSyBCOjt-NYcfBoYFPujAxHLeqiI6TAet4M8",
  authDomain: "capstone-97.firebaseapp.com",
  projectId: "capstone-97",
  storageBucket: "capstone-97.appspot.com",
  messagingSenderId: "256006514596",
  appId: "1:256006514596:web:5e37014ff99f56d8f94331"
  };
  
firebase.initializeApp(firebaseConfig);
user_name= localStorage.getItem("user_name");
document.getElementById("username").innerHTML= "Welcome " + " " + user_name;
function addRoom(){
  room_name= document.getElementById("room_name").value;
  localStorage.setItem("room_name", room_name);
  window.location= "proble_page.html";
}
function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
  Room_names = childKey;
  row= "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'>#"+Room_names+ "</div><hr>";
  document.getElementById("output").innerHTML += row;
});});}
getData();
function redirectToRoomName(name){
  localStorage.setItem("room_name", name);
  window.location= "proble_page.html";
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
}