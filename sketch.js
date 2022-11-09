// Name : Roshan Dhimal
// Project2: Creative Research


// create image variable
let img;
let img2;
let img3;
// decalare array for colors
let arrayColors = ["#83da6a","#D5253E64", "#E0C127FF","#E3547CFF", "#C0A93CFF"];
let chooseColor;
let detect = false;
let winWidth = 1290; winHeight = 720;
let fontSize;
let fontColor;
let sizeX;
let sizeY;
let button1;
let button2;
let startButton;
let button;
let takeString;
let func;

// preload the image
function preload() {
    img = loadImage('map.png');
    img2 = loadImage('human27.png');
    img3 = loadImage('intro.png');
}
// resize the window
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

// create button for the sketch
function btn(button, takeString, sizeX, sizeY, func, fontSize, fontColor){
    button = createButton(takeString);
    button.position(sizeX,sizeY);
    button.mousePressed(func);
    button.style('font-size', fontSize);
    button.style('background-color', fontColor);
}


function setup(){
    // making a resolution
    let canvas = createCanvas(windowWidth,windowHeight);
    canvas.addClass('centered'); // making the canvas centers refrence to style.css
    //make button for the program
    // btn(startButton, "Start", 800, 800, startFile, '12', '#83da6a');
    startButton = createButton("Start");
    startButton.position(800,800);
    startButton.mousePressed(startFile);
    startButton.style('font-size', 12);
    startButton.style('background-color', '#83da6a');
    frameRate(1);

}
// : #505091
function draw(){
    background("#3c3c7c");
    // background("rgb(192,169,60)");
    img3.resize(winWidth, winHeight);

    // if block to change the positon of the image
    // As the window size changes
    if (windowWidth > 1886){
        image(img3,550,0);
    }
    else{
        image(img3,250,0);
    }
    image(img2, mouseX, mouseY);
    makeHeat();
    // console.log(windowWidth, windowHeight);
    console.log(mouseX, mouseY);
}

// move to new window
function gotolink() {
    window.open("california.html");
}
function gotolink2() {
    window.open("California Story.html");
}

function startFile(){
    btn(button1, "California", 320, 400,gotolink, '12','#bbb165' );
    btn(button2, "here", 320, 400,gotolink2, '12', '#b9ab63' );
    startButton.hide();
    detect = true;
}
// draw a heat map in the window
function makeHeat(){

    if (detect == false){
        chooseColor = random(arrayColors);
        fill(chooseColor);
        circle(random(300,900),10,50);
        noFill();
    }
    else{

    }

}