var firebase = require("firebase");
src = "https://www.gstatic.com/firebasejs/5.5.9/firebase.js"
var config = {
  apiKey: "AIzaSyDMeXmgZcNDvAXtFBzVtW01_nfPPs7e_OI",
  authDomain: "ticktask-1540076089537.firebaseapp.com",
  databaseURL: "https://ticktask-1540076089537.firebaseio.com",
  projectId: "ticktask-1540076089537",
  storageBucket: "ticktask-1540076089537.appspot.com",
  messagingSenderId: "592668257087"
};
var fire = firebase.initializeApp(config);
var ref = new Firebase("https://ticktask-1540076089537.firebaseio.com/");
ref.update({message:"Hello"});
