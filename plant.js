function preLoad(){
    img= loadImage('plants.jpg');
}

function setup(){
    canvas= createCanvas(640, 420);
    canvas.position(350,200);
    objectDetector = ml5.ojectDetector('cocossd', modelLoaded);
    document.getElementById("status_1").innerHTML = "Status : Detecting Objects";}

img="";
status_1="";
 
function draw(){
    image(img,0, 0, 640, 420);
}

function modelLoaded(){
    console.log("Model Loaded!")
    status_1 = true;
    objectDetector.detect(img, gotResult);
}


function gotResult(error, results){
    if (error){
        console.log(error);
    }else{
        console.log(results);
    }
}

