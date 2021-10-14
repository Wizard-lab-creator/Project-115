function preload() {

}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.position(870, 200);
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses)
}

function modelLoaded() {
    console.log("posenet is initialized");
}

function draw() {
    image(video, 0, 0, 300, 300);
}

function takeSnapshot() {
    save("imageyour.png");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
    }
}