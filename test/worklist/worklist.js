
/*

I need to change to using appendchild and remove child then 
add a field for prvious list to remove or always have it only on one list by auto removing all others.
would still have the problem of refreshing all lists every time.  Not sure if this is really a problem.

*/



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


}


function readData() {
    
   
    // Load database
    var database = firebase.database();

    // Load scores/bob
 
    var ref = database.ref('newProtocols');
    ref.on('value', outputData); 

}


function outputData(data) {

    refreshLists();
   
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

function refreshLists(){
    document.getElementById('office').innerHTML = "";
    document.getElementById('officeDone').innerHTML = "";
    document.getElementById('tech').innerHTML = "";
    document.getElementById('techDone').innerHTML = "";
    document.getElementById('rad').innerHTML = "";
    document.getElementById('radDone').innerHTML = "";
    document.getElementById('printDone').innerHTML = "";
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
