function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    
    canvas = createCanvas(550,550);
    canavs.position(560,150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is intialized!");
}

function draw(){
    backgrouond('#969A97');
}
function gotPoses(results){
    if(results.length > 0 ){
        console.log(results);
    }
}