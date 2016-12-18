var img;
var img1;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;
var sound;
var offset=0;
var speed = 0.02;
var angle = 0;
var scalar = 20;

function setup() {
  createCanvas(730,487);
  image(img, 0, 0);
  image(img1, 289, 107);
  image(img2, 424, 111);
  image(img3, 363, 184);
  image(img4, 342, 253);
  image(img5, 551, 122);
  image(img6, 303, 43);
  image(img7, 350, 345);
}

function draw() {
  image(img,0,0);
  
  if(mouseX>380){
    mouseMove();
/*    sound.play();*/
  } else {
    setup();
/*    sound.stop();*/
  }

  
}

function preload() {
/*  sound = loadSound("assets/audio2.mp3");*/
  img7 = loadImage("assets/7.png");
  img6 = loadImage("assets/6.png");
  img5 = loadImage("assets/5.png");
  img4 = loadImage("assets/4.png");
  img3 = loadImage("assets/3.png");
  img2 = loadImage("assets/2.png");
  img1 = loadImage("assets/1.png");
  img = loadImage("assets/0.png");

}

function mouseMove(){
  var z = random(50,64);
  
  var m = map(mouseX,0,width,300,500);
  var n = map(mouseY,0,height,140,220);
  translate(0,m);
  translate(0,n);
/*  angle += speed;*/
  
  image(img1,m-z+sin(angle),n-z+sin(angle));
  image(img2,m+z+sin(angle),n-z+sin(angle));
  image(img3,m+sin(angle),n + sin(angle));
  image(img4,m-z+sin(angle),(n+z)+sin(angle));
  image(img5,m+100+z+sin(angle),n-z+sin(angle));
  image(img6,m-z,n-z+sin(angle));
  



}
/*function mousePressed () {
  sound.play();
}*/