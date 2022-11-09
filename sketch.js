// Name : Roshan Dhimal
// Project2: Creative Research


// create image variable
let img;
let img2;
// decalare array for colors
let arrayColor= ["red"];
let winWidth = 1290; winHeight = 720;
let detect = false;
let sizeX;
let sizeY;
var button1;
let button2;
let num;

// preload the image
function preload() {
    img = loadImage('map.png');
    img2 = loadImage('human27.png');
}
// resize the window
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}



// // create button for the sketch
// function btn(){
//
//     button1 = createButton("California");
//     button1.position(320,400);
//     // button1.mousePressed(gotolink());
//
//     button2 = createButton("here");
//     button2.position(200,400);
//     // button2.mousePressed(gotolink2());
// }

function setup(){
    // making a resolution
    let canvas = createCanvas(windowWidth,windowHeight);
    canvas.addClass('centered'); // making the canvas centers refrence to style.css

    // imageMode(CORNER);
    button = createButton("California");
    button.position(320,400);


    button2 = createButton("here");
    button2.position(200,400);

    button.mousePressed(gotolink2());
    button2.mousePressed(gotolink());

}
// : #505091
function draw(){
    background("#505091");
    img.resize(winWidth, winHeight);

    // if block to change the positon of the image
    // As the window size changes
    if (windowWidth > 1886){
        image(img,550,0);
    }
    else{
        image(img,250,0);
    }


}
// move to new window
function gotolink() {

    window.open("california.html");
}
function gotolink2() {

    window.open("California Story.html");

    // circle(100,100,100);
}