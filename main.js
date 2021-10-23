img="";
status="";

function preload()
{
img=loadImage('dog_cat.jpg');
}

function setup()
{
canvas=createCanvas(640,420);
canvas.center();
objectDetector=ml5.ObjectDetector('cocossd',modelLoaded);
document.getElementById("status1").innerHTML="Detecting Objects ......";
}

function modelLoaded()
{
console.log("MODEL LOADED .......");
status=true;
objectDetector.detect(img,gotResult);
}

function gotResult(error,results)
{
if (error)
{
console.error(error);
}

else
{
console.log(results);
}

}

function draw()
{
image(img,0,0,640,420);
fill('#FF0000');
text("Dog",110,110);
noFill();
stroke('#FF0000');
rect(100,0,200,350);

fill('#FF0000');
text("Cat",305,110);
noFill();
stroke('#FF0000');
rect(300,0,200,350);
}