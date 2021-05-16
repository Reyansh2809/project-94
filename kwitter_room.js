//ADD YOUR FIREBASE LINKS
//Ya ya we will do it
var firebaseConfig = {
    apiKey: "AIzaSyA9ecwk7msiDnev5RkPTenJB-eD3DW4N9A",
    authDomain: "kwitter-the-twitter.firebaseapp.com",
    projectId: "kwitter-the-twitter",
    storageBucket: "kwitter-the-twitter.appspot.com",
    messagingSenderId: "325967618134",
    appId: "1:325967618134:web:77f187db7b8b47439bdbf7"
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