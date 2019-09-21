// helpful visualization  https://adamnizol.github.io/Transformation-Visualization-in-Processing/
// https://www.khanacademy.org/computer-programming/spin-off-of-vertex-shape-drawing-tool/4996753861607424

var angle;
var smallBoxSize;
var startX;
var xBox;
var yBox;
var buffer;
var shapeArray;
var chosenShape;
var lastTouchEnd;
var now;
var screenWidth;
var screenHeight;
var centerX;
var centerY;

print("global var section");


function setup() {
    print("setup section");
    createCanvas(windowWidth, windowHeight);
    //createCanvas(screenSize,screenSize*1.34); // screenWidth, screenHeight);
    angleMode(DEGREES);
    //rectMode(CENTER);
    frameRate(10);

    screenWidth=windowWidth;
    screenHeight=windowHeight;

    angle = 0;
    smallBoxSize = 0.05*windowWidth; // for phone this will be either 0.05 or 0.1/////['=;m,']

    startX = 200;//windowWidth/2; //300;//windowWidth/2; //screenSize/2;
    xBox=startX; // x starts in the middle of the screen at the top
    yBox=0;//smallBoxSize;

    buffer = smallBoxSize*2;

    shapeArray = ['L','T','MirrorL','S','Z','rect','box'];
    chosenShape = shapeArray[Math.floor(Math.random()*shapeArray.length)];

    lastTouchEnd = 0;



  
} // end setup


function draw() {

    print("draw section");
    background(0);
    fill(255, 0, 0);
    ellipse(111,111,44,44);



    if(yBox>=screenHeight-smallBoxSize){
        chosenShape = shapeArray[Math.floor(Math.random()*shapeArray.length)];
        yBox=0;
        xBox=startX;
    }


    switch(chosenShape) {
        case "L":
            centerX=1.3*smallBoxSize;
            centerY=0.8*smallBoxSize;
            break;
        case "MirrorL":
            centerX=1.3*smallBoxSize;
            centerY=0.8*smallBoxSize;
            break;
        case "S":
            centerX=1*smallBoxSize;
            centerY=1.5*smallBoxSize;
            break;
        case "Z":
            centerX=1*smallBoxSize;
            centerY=1.5*smallBoxSize;
            break;
        case "T":
            centerX=1.5*smallBoxSize;
            centerY=0.8*smallBoxSize;
            break;
        case "rect":
            centerX=2*smallBoxSize;
            centerY=0.5*smallBoxSize;
            break;
        case "box":
            centerX=1*smallBoxSize;
            centerY=1*smallBoxSize;
            break;
        default:
            console.log("Something went wrong. chosenShape was: " + chosenShape + ".");
    } // end switch


    push();
        fill(0, 0, 255);
        translate(xBox, yBox); // +300
        translate(centerX, centerY);
        rotate(angle);  
        translate(-centerX, -centerY);
        drawNewPiece(chosenShape,smallBoxSize, xBox, yBox);

    pop();

    yBox+=0.1*smallBoxSize; // I previously used smallBoxSize

    
    if (mouseIsPressed){
        now = (new Date()).getTime();
        if(now-lastTouchEnd>50){

            if (abs(mouseY-(yBox + centerY))<=buffer && abs(mouseX-(xBox +centerX))<=buffer){
                  angle+=90;
            }
        }
        lastTouchEnd=now;
    }
    
    // touchMoved() runs all the time and there is no call in draw.

} // end main draw function

// SHAPES
/*
Seven different shapes called tetrominoes: 
S-shape, Z-shape, T-shape, L-shape, Line-shape, MirroredL-shape, and a Square-shape. 
Each of these shapes is formed with four squares. 
*/

function touchMoved() { // I think this is like a mouse dragged
    if (abs(mouseY-(yBox + centerY))>=buffer){

        if(mouseX>xBox+centerX){  // move right
            xBox+=smallBoxSize*0.5;
        } else if (mouseX<xBox-centerX){
            xBox-=smallBoxSize*0.5;
        } 
        // prevent default
        return false;
    }
}

function getRndInteger(min, max) {
    return Math.floor(random(min, max)) + min;
}

function drawNewPiece(_chosenShape,_smallBoxSize, _xBox, _yBox){
    print("in drawNewPiece");
    let chosenShapeLocal=_chosenShape;

    switch(chosenShapeLocal) {
        case "L":
            drawLshape(_smallBoxSize, _xBox, _yBox);
            break;
        case "MirrorL":
            drawMirrorL(_smallBoxSize, _xBox, _yBox);
            break;
        case "S":
            drawSshape(_smallBoxSize, _xBox, _yBox);
            break;
        case "Z":
            drawMirrorS(_smallBoxSize, _xBox, _yBox);
            break;
        case "T":
            drawTshape(_smallBoxSize, _xBox, _yBox);
            break;
        case "rect":
            drawRect(_smallBoxSize, _xBox, _yBox);
            break;
        case "box":
            drawBox(_smallBoxSize, _xBox, _yBox);
            break;
        default:
            console.log("Something went wrong. chosenShape was: " + chosenShapeLocal + ".");
    } // end switch
       

} // end drawNewPiece


function drawSshape(smallBoxSizeTemp, startXtemp,startYtemp){
    fill(255, 0, 0);
    let smallBox = smallBoxSizeTemp;
    let startX=xBox;
    let startY=yBox;
    //let startX=1*smallBox;
    //let startY=1.5*smallBox;
//
    // to make the S-shape 
    square(startX,startY,smallBox);
    square(startX,startY+smallBox,smallBox);
    square(startX+smallBox,startY+smallBox,smallBox);
    square(startX+smallBox,startY+smallBox*2,smallBox);
   
}


function drawMirrorS(smallBoxSizeTemp, startXtemp,startYtemp){
    fill(0, 0, 255);
    let smallBox = smallBoxSizeTemp;
    let startX=xBox;//1*smallBox;
    let startY=yBox;//1.5*smallBox;

    // to make the S-shape 
    square(startX,startY,smallBox);
    square(startX,startY+smallBox,smallBox);
    square(startX-smallBox,startY+smallBox,smallBox);
    square(startX-smallBox,startY+smallBox*2,smallBox);
   
}



function drawTshape(smallBoxSizeTemp, startXtemp,startYtemp){
    fill(0,255,255);
    let smallBox = smallBoxSizeTemp;
    let startX=xBox;
    let startY=yBox;
    //let startX=1.5*smallBox;
    //let startY=0.8*smallBox;

    // to make the L-shape 
    square(startX,startY,smallBox);
    square(startX+smallBox,startY,smallBox);
    square(startX+2*smallBox,startY,smallBox);
    square(startX+smallBox,startY+smallBox,smallBox);
}



function drawLshape(smallBoxSizeTemp, startXtemp,startYtemp){
    fill(0, 255, 0);
    let smallBox = smallBoxSizeTemp;
    let startX=xBox;
    let startY=yBox;
    //let startX=1.3*smallBox;
    //let startY=0.8*smallBox;

    // to make the L-shape 
    square(startX,startY,smallBox);
    square(startX+smallBox,startY,smallBox);
    square(startX+2*smallBox,startY,smallBox);
    square(startX,startY+smallBox,smallBox);
}


function drawMirrorL(smallBoxSizeTemp, startXtemp,startYtemp){
    fill(244, 232, 104);
    let smallBox = smallBoxSizeTemp;
    let startX=xBox;
    let startY=yBox;
    //let startX=1.3*smallBox;
    //let startY=0.8*smallBox;

    // to make the Mirror L-shape 
    square(startX+smallBox,startY+smallBox,smallBox);
    square(startX+2*smallBox,startY+smallBox,smallBox);
    square(startX,startY+smallBox,smallBox);
    square(startX,startY,smallBox);
}

  
function drawRect(smallBoxSizeTemp, startXtemp,startYtemp){
    fill(252, 8, 219);
    let smallBox = smallBoxSizeTemp;
    let startX=xBox;
    let startY=yBox;
    //let startX=2*smallBox;
    //let startY=0.5*smallBox;
   
    // to make the RECTANLE shape for tetris I need 4 adjacent squares
    square(startX,startY,smallBox);
    square(startX+smallBox,startY,smallBox);
    square(startX+2*smallBox,startY,smallBox);
    square(startX+3*smallBox,startY,smallBox);


}
  
function drawBox(smallBoxSizeTemp, startXtemp,startYtemp){
    // By default, the first two parameters set the location of the upper-left corner, 
    // the third sets the side size of the square. The way these parameters are 
    // interpreted, however, may be changed with the rectMode() function.
    fill(255, 170, 71);
    let smallBox = smallBoxSizeTemp;
    let startX=0;
    let startY=0;

    // to make the box shape for tetris I need 4 adjacent squares
    square(startX,startY,smallBox);
    square(startX+smallBox,startY,smallBox);
    square(startX,smallBox,startY+smallBox);
    square(startX+smallBox,startY+smallBox,smallBox);

}

