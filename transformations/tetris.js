// helpful visualization  https://adamnizol.github.io/Transformation-Visualization-in-Processing/
// https://www.khanacademy.org/computer-programming/spin-off-of-vertex-shape-drawing-tool/4996753861607424

var screenFactor = 0.6;
var screenSize = 375;

function setup() {
    createCanvas(windowWidth, windowHeight);
    //createCanvas(screenSize,screenSize*1.34); // screenWidth, screenHeight);
    angleMode(DEGREES);
    //rectMode(CENTER);
    //frameRate(50);
  
} // end setup


let angle = 0;
var smallBoxSize = 0.1*windowWidth;

let startX = windowWidth/2; //screenSize/2;
var xBox=startX; // x starts in the middle of the screen at the top
var yBox=smallBoxSize;

var buffer = smallBoxSize*3;

var shapeArray = ['L','T','MirrorL','S','Z','rect','box'];
var chosenShape;
chosenShape = shapeArray[Math.floor(Math.random()*shapeArray.length)];

var lastTouchEnd = 0;
var now;


function draw() {
    background(0);
    var screenWidth=screenSize; //displayWidth*screenFactor; //800;
    var screenHeight=screenSize*1.34; //displayHeight*screenFactor; //400;

    
    if(yBox>=windowHeight){
        chosenShape = shapeArray[Math.floor(Math.random()*shapeArray.length)];
        yBox=0;
        xBox=startX;
    }
    
    push();
        fill(0, 0, 255);
        translate(xBox, yBox); // +300
        translate(smallBoxSize, smallBoxSize);
        rotate(angle);  
        translate(-smallBoxSize, -smallBoxSize);
        drawNewPiece(chosenShape,smallBoxSize, xBox, yBox);

    pop();

    yBox+=1; // I previously used smallBoxSize

    
    if (mouseIsPressed){
        now = (new Date()).getTime();
        if(now-lastTouchEnd>50){

            if (abs(mouseY-yBox+smallBoxSize)<=buffer){
                  angle+=90;
            }
        }
        lastTouchEnd=now;
    }
    
} // end main draw function

// SHAPES
/*
Seven different shapes called tetrominoes: 
S-shape, Z-shape, T-shape, L-shape, Line-shape, MirroredL-shape, and a Square-shape. 
Each of these shapes is formed with four squares. 
*/

function touchMoved() { // I think this is like a mouse dragged
    if(mouseX>xBox+buffer){  // move right
        xBox+=smallBoxSize;
    } else if (mouseX<xBox-buffer){
        xBox-=smallBoxSize;
    } 
    // prevent default
    return false;
}

function getRndInteger(min, max) {
    return Math.floor(random(min, max)) + min;
}

function drawNewPiece(_chosenShape,_smallBoxSize, _xBox, _yBox){
    let chosenShape=_chosenShape;

    switch(chosenShape) {
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
            print("Something went wrong. chosenShape was: " + chosenShape + ".");
    } // end switch
       

} // end drawNewPiece


function drawSshape(smallBoxSizeTemp, startXtemp,startYtemp){
    fill(255, 0, 0);
    let smallBox = smallBoxSizeTemp;
    let startX=0;
    let startY=0;

    // to make the S-shape 
    square(startX,startY,smallBox);
    square(startX,startY+smallBox,smallBox);
    square(startX+smallBox,startY+smallBox,smallBox);
    square(startX+smallBox,startY+smallBox*2,smallBox);
   
}


function drawMirrorS(smallBoxSizeTemp, startXtemp,startYtemp){
    fill(0, 0, 255);
    let smallBox = smallBoxSizeTemp;
    let startX=0;
    let startY=0;

    // to make the S-shape 
    square(startX,startY,smallBox);
    square(startX,startY+smallBox,smallBox);
    square(startX-smallBox,startY+smallBox,smallBox);
    square(startX-smallBox,startY+smallBox*2,smallBox);
   
}



function drawTshape(smallBoxSizeTemp, startXtemp,startYtemp){
    fill(0,255,255);
    let smallBox = smallBoxSizeTemp;
    let startX=0;
    let startY=0;

    // to make the L-shape 
    square(startX,startY,smallBox);
    square(startX+smallBox,startY,smallBox);
    square(startX+2*smallBox,startY,smallBox);
    square(startX+smallBox,startY+smallBox,smallBox);
}



function drawLshape(smallBoxSizeTemp, startXtemp,startYtemp){
    fill(0, 255, 0);
    let smallBox = smallBoxSizeTemp;
    let startX=0;
    let startY=0;

    // to make the L-shape 
    square(startX,startY,smallBox);
    square(startX+smallBox,startY,smallBox);
    square(startX+2*smallBox,startY,smallBox);
    square(startX,startY+smallBox,smallBox);
}


function drawMirrorL(smallBoxSizeTemp, startXtemp,startYtemp){
    fill(244, 232, 104);
    let smallBox = smallBoxSizeTemp;
    let startX=0;
    let startY=0;

    // to make the Mirror L-shape 
    square(startX+smallBox,startY+smallBox,smallBox);
    square(startX+2*smallBox,startY+smallBox,smallBox);
    square(startX,startY+smallBox,smallBox);
    square(startX,startY,smallBox);
}

  
function drawRect(smallBoxSizeTemp, startXtemp,startYtemp){
    fill(252, 8, 219);
    let smallBox = smallBoxSizeTemp;
    let startX=0;
    let startY=0;
   
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

