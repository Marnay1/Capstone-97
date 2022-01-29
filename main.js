var firebaseConfig = {
  apiKey: "AIzaSyBCOjt-NYcfBoYFPujAxHLeqiI6TAet4M8",
  authDomain: "capstone-97.firebaseapp.com",
  projectId: "capstone-97",
  storageBucket: "capstone-97.appspot.com",
  messagingSenderId: "256006514596",
  appId: "1:256006514596:web:5e37014ff99f56d8f94331"
  };
  
firebase.initializeApp(firebaseConfig);
function addUser(){
    username= document.getElementById("user_name").value;
    localStorage.setItem("user_name", username);
    window.location= "proble_room.html"
}