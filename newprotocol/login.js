
function initializeFirebase() {


    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCpaVltd-dUeV9RP4SgV7rX-5VKRstRcnI",
        authDomain: "newprotocolproject.firebaseapp.com",
        databaseURL: "https://newprotocolproject.firebaseio.com",
        projectId: "newprotocolproject",
        storageBucket: "",
        messagingSenderId: "467156917316"
      };
      
    firebase.initializeApp(config);

    //test to see it is working  it never acts like it is working   
    // console.log(firebase);

    // Reference to the protocols object in your Firebase database
    // var newProtocols = firebase.database().ref("newProtocols");
}





function login() {
    // console.log("In Login: ", document.getElementById('username').value, " ", document.getElementById('password').value);

    var email = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
            // Sign-in successful.
            var location = document.getElementById("location").value;
            var modality = document.getElementById("techModality").value;
            var user = firebase.auth().currentUser.email;
            window.alert(user + " is logged is at " + location + " working in " + modality + ".  ");
        }, // like an else
        function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // console.log("Error! ", errorCode, errorMessage);
            window.alert("Invalid username/password!");
        });
}

function logout() {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        window.alert("Logout succesful!");
    }, function(error) {
        // An error happened.
        // console.log("Error with logout: ", error.code, " ", error.message);
        window.alert("Error: Unable to log out!");
    });
}


// Not using the below right now
function checkLogin() {
    // Function returns information regarding current Firebase user
    // returns "No current user!" if no user is logged in
    if (firebase.auth().currentUser != null)
        return firebase.auth().currentUser.email;
    else
        return "No current user!";
}