song  = "";
scoreRightWrist = 0;
scoreLeftWrist =0;
leftWristX =0;
leftWristY =0;
rightWristX =0;
rightWristX =0;
function preload() {
    song = loadSound("music.mp3");
}


function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
   
}

function gotPoses(results) {
    if (results.length) {
        console.log(results);
        scoreRightWrist = results[0].pose.keypoints[10].score;
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist  =" + scoreLeftWrist);
        console.log("scoreRightWrist  =" + scoreRightWrist);



        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX + "leftWristY = " + leftWristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristX = = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX + "rightWristY = " + rightWristY);
    }
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function modelLoaded() {
    console.log('PoseNet is innitialized');
}


function SongName() {
    song.play();
    song.setValue(1);
    song.rate(1);

}