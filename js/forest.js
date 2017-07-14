var canvas, background, foreground;

function preload(){
	background = loadImage("https://media-cdn.tripadvisor.com/media/photo-o/01/8f/cb/ed/sam-houston-national.jpg")
	console.log(background)
}

function setup(){
	canvas = createCanvas(640,480);
}

function draw(){
	drawBack();
	drawTree(100, 380);
}

function drawBack(){
	image(background, 0, 0, 640, 480);
}

function drawTree(tx,ty){
	fill("brown");
	rect(tx-20, ty-80, 40, 80);
	fill("green");
	triangle(tx-55, ty-80, tx+55, ty-80, tx, 100);
}