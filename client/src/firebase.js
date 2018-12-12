var app_fireBase = {};
(function(){
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyD58g_fm3ltq9XOmSn1Vgs1HzTCRmOGvfk",
        authDomain: "tick-task-db50f.firebaseapp.com",
        databaseURL: "https://tick-task-db50f.firebaseio.com",
        projectId: "tick-task-db50f",
        storageBucket: "tick-task-db50f.appspot.com",
        messagingSenderId: "455444650561"
    };
    firebase.initializeApp(config);

    app_fireBase = firebase.database().ref();
})()

