
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


function readData() {
    
   
    // Load database
    var database = firebase.database();

    // Load scores/bob
 
    var ref = database.ref('newProtocols');
    ref.on('value', outputData); 

}

/*
 if (document.getElementById('office') != null && realdata[keys[i]].status === 1){
            office(realdata[keys[i]].firstname);
        }
        if (realdata[keys[i]].status === 2){
            officeDone(realdata[keys[i]].firstname);
        }
        if (realdata[keys[i]].status === 3){
            tech(realdata[keys[i]].firstname);
        }
        if (realdata[keys[i]].status === 4){
            techDone(realdata[keys[i]].firstname);
        }
        if (realdata[keys[i]].status === 5){
            rad(realdata[keys[i]].firstname);
        }
        if (document.getElementById('radDone') != null && realdata[keys[i]].status === 6){
            radDone(realdata[keys[i]].firstname);
        }
       
        if (realdata[keys[i]].status === 7){
            printDone(realdata[keys[i]].firstname);
*/

function outputData(data) {
   
    realdata = data.val(); 
    var keys = Object.keys(data.val());
    for (i = 0; i < keys.length; i++){
        if (document.getElementById('office') != null && realdata[keys[i]].status === 1){
            office(realdata[keys[i]].firstname);
        }
        if (document.getElementById('officeDone') != null && realdata[keys[i]].status === 2){
            officeDone(realdata[keys[i]].firstname);
        }
        if (document.getElementById('tech') != null && realdata[keys[i]].status === 3){
            tech(realdata[keys[i]].firstname);
        }
        if (document.getElementById('techDone') != null && realdata[keys[i]].status === 4){
            techDone(realdata[keys[i]].firstname);
        }
        if (document.getElementById('rad') != null && realdata[keys[i]].status === 5){
            rad(realdata[keys[i]].firstname);
        }
        if (document.getElementById('radDone') != null && realdata[keys[i]].status === 6){
            radDone(realdata[keys[i]].firstname);
        }
       
        if (document.getElementById('printDone') != null && realdata[keys[i]].status === 7){
            printDone(realdata[keys[i]].firstname);
        }
    }
       
}

function office (name){
    
    addData(name,'office')
}

function officeDone (name){
    addData(name,'officeDone')
    
}

function tech (name){
    addData(name,'tech')
}

function techDone (name){
    addData(name,'techDone')
}

function rad (name){
    addData(name,'rad')
}

function radDone (name){
    addData(name,'radDone')
}

function printDone (name){
    addData(name,'printDone')
}



function addData(name,stringDivId){
    var node = document.getElementById(stringDivId);

    var htmlContent = node.innerHTML;

    document.getElementById(stringDivId).innerHTML = htmlContent + "<br>" + name;
    /*
    if(document.getElementById(stringDivId) != null){

        var node = document.getElementById(stringDivId);

        var htmlContent = node.innerHTML;
        
        document.getElementById(stringDivId).innerHTML = htmlContent + "<br>" + name;
    }
    */
}