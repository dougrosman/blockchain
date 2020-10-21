ethereum.autoRefreshOnNetworkChange = false;

let classifier;
let imageModelURL = 'models/tm-my-image-model/model.json';

let video;
let flippedVideo;
let label = "";
let meterHeight = 0;
let drawBackground = false;

// Load the model first
function preload() {
  classifier = ml5.imageClassifier(imageModelURL);
}

function setup() {
  let cnv = createCanvas(640, 480);
  cnv.parent("#sketch");
  // Create the video
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  flippedVideo = ml5.flipImage(video)
  // Start classifying
  classifyVideo();
}

function draw() {
  if(drawBackground){
    background(0);
  }
  
  // Draw the video
  image(flippedVideo, 0, 0);

  // Draw the label
  fill(0);
  textSize(16);
  textAlign(CENTER);
  text(label, width / 2, height - 4);
  fill(255, 0, 0);
  noStroke();
  rect(width-20, height-meterHeight, 20, meterHeight);
}

// Get a prediction for the current video frame
function classifyVideo() {
  flippedVideo = ml5.flipImage(video)
  classifier.classify(flippedVideo, gotResult);
}

function gotResult(error, results) {
  drawBackground = true;
  // If there is an error
  if (error) {
    console.error(error);
    return;
  }

  /////// CLASSIFICATION INFORMATION ///////
  // this is the section where you'll initiate a transaction
  // based on the results from the model classification
  
  if(results[0].label == "over_heart" && results[0].confidence > 0.8) {
    meterHeight++;
  } else {
    if(meterHeight > 0) {
      meterHeight-=4;
    }
  }
  
  label = results[0].label;
  // Classifiy again!
  classifyVideo();
}