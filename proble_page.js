user_name =localStorage.getItem("user_name");
room_name= localStorage.getItem("room_name");
document.getElementById("name").innerHTML= "Welcome " + user_name + " To The " + room_name + " Room";
var firebaseConfig = {
  apiKey: "AIzaSyBCOjt-NYcfBoYFPujAxHLeqiI6TAet4M8",
  authDomain: "capstone-97.firebaseapp.com",
  projectId: "capstone-97",
  databaseURL:"https://capstone-97-default-rtdb.firebaseio.com",
  storageBucket: "capstone-97.appspot.com",
  messagingSenderId: "256006514596",
  appId: "1:256006514596:web:5e37014ff99f56d8f94331"
  };
  
firebase.initializeApp(firebaseConfig);
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("index.html");
}
user_name =localStorage.getItem("user_name");
room_name= localStorage.getItem("room_name");
document.getElementById("name").innerHTML= "Welcome " + user_name + " To The " + room_name + "Room";
function send(){
  message= document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:message,
    like:0
  });
  document.getElementById("msg").value= "";
}