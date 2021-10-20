function preload() {
	world_start = loadSound("world_start.wav");
	jump_wav = loadSound("jump.wav");
    mariodie_wav = loadSound("mariodie.wav");
	gameover_wav = loadSound("gameover.wav");
	coin_wav = loadSound("coin.wav");
	kick_wav = loadSound("kick.wav");

	setSprites();
	MarioAnimation();
}
rightWristX = "";
rightWristY = "";
function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");

	instializeInSetup(mario);

	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent("game_console");

	poseNet = ml5.poseNet(video, modelloaded);
	poseNet.on("pose", getposes);
}
function draw() {
	console.log("rightX = "+rightWristX+" rightY = "+rightWristY);
	game()
}
function modelloaded()
{
	console.log("model is loaded");
}
function getposes(results)
{
	if(results.length > 0)
	{
		rightWristX = results[0].pose.rightWrist.x;
	    rightWristY = results[0].pose.rightWrist.y;
	}
}





