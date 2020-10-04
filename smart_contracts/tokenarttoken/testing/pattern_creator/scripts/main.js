///// P5 /////
let rows;
let colors = [];
let numColors;
let size;
let margin;
var shouldDraw;
let translateVal;
let newPalette;

// Web3 calls.
var eth;
var getButton;

let button = document.getElementById("generate");
let button2 = document.getElementById("create");

// Print a list of patterns to the console
button.addEventListener("click", function(){
  // shouldDraw = !shouldDraw;
  eth.getPatterns();
  console.log("yo");
});

// mints a new pattern string to the contract
button2.addEventListener("click", function() {
  eth.createPattern("3031");
})


function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent("sketch");

  textFont('monospace');
  textSize(16);

  shouldDraw = true;
  newPalette = true;
  noStroke();

  rows = 6;
  size = (width/2)/rows;
  margin = size/4;
  numColors = 6;

  colors = createPalette(numColors);

  eth = new Eth();
}

function draw() {

  translateVal = (size/2)*(rows/2) + ((rows-1)*margin)/2;
  size = (width/2)/rows;
  margin = size/4;

  if(newPalette) {
    colors = createPalette(numColors);
    newPalette = !newPalette;
    push();
      translate(translateVal, translateVal);
      generatePattern(rows, colors);
    pop();
    drawPalette(10, 20);
    drawText(width/2, 550);
  }

  if(shouldDraw) {
    translateVal = (size/2)*(rows/2) + ((rows-1)*margin)/2;
    size = (width/2)/rows;
    margin = size/4;
    //drawDebug();
    push();
      translate(translateVal, translateVal);
      generatePattern(rows, colors);
    pop();

    drawText(width/2, 550);
    drawPalette(10, 20);
    shouldDraw = !shouldDraw;
  }
}

function generatePattern(rows, _colors) {
  background(color("#fff"));
  for(let y = 0; y < rows; y++) {
    for(let x = 0; x < rows; x++) {
      push();
        translate(x*margin, y*margin);
        translate(x*size, y*size);
        fill(random(_colors));
        rect(margin, margin, size, size);
      pop();
    }
  }
}

function createPalette(num) {

  let _colors = [];
  let charStr = "123456789abcdef";
  //let charStr = "abcd"
  let chars = charStr.split('');
  for(let i = 0; i < num; i++) {

    //let c = color(random(255), random(255), random(255));
    let randomColorString = `#${chars[Math.floor(random(chars.length))]}${chars[Math.floor(random(chars.length))]}${chars[Math.floor(random(chars.length))]}`;
    let c = color(randomColorString);
    console.log(randomColorString);
    _colors.push(c);
  }
  return _colors;

//   let red = color(255, 0, 0);
//   let green = color(0, 255, 0);
//   let blue = color(0, 0, 255);
//   let colors = [red, green, blue];

//   return colors;
}

function drawText(x, y) {

  myStr = `Grid = ${rows} X ${rows} \t # Colors = ${numColors}`;
  strWidth = textWidth(myStr);

  fill(0);
  text(myStr, x-strWidth/2, y);

}

function drawPalette(x, y) {

  fill(0);
  myStr = "Your Palette:\t"
  strWidth = textWidth(myStr);

  text("Your Palette:", x, y);

  for(let i = 0; i < colors.length; i++) {
    let myColor = colors[i];
    fill(myColor);
    push();
      translate(x+strWidth, y-14);
      if(i < 17) {
      rect(i*25, 0, 20, 20);
      } else {
        let x = i-17
      rect(x*25, 25, 20, 20);
      }
    pop();
  }

}


function drawDebug() {
  fill(255, 255, 0);
    rect(0, 0, translateVal, translateVal);
    rect(width-translateVal, 0, translateVal, translateVal);
    rect(0, height-translateVal, translateVal, translateVal);
    rect(width-translateVal, height-translateVal, translateVal, translateVal);
    fill(255, 0, 0);
    rect(translateVal, translateVal, width-(translateVal*2), height-(translateVal*2));
}

function keyPressed() {

  if(key == ' ') {
    shouldDraw = !shouldDraw;
  }

  if(key == 'c') {
    newPalette = !newPalette;
  }

  if(keyCode == UP_ARROW) {

    if(numColors < 255)
    {
      numColors++;
      colors = createPalette(numColors);
      console.log(numColors);
      shouldDraw = !shouldDraw;
    }
  }

  if(keyCode == DOWN_ARROW) {

    if(numColors > 1)
    {
      numColors--;
      colors = createPalette(numColors);
      console.log(numColors);
      shouldDraw = !shouldDraw;
    }
  }

  if(keyCode == RIGHT_ARROW) {

    if(rows < 255)
    {
      rows++;
      console.log(rows);
      shouldDraw = !shouldDraw;
    }
  }

  if(keyCode == LEFT_ARROW) {

    if(rows > 1)
    {
      rows--;
      console.log(rows);
      shouldDraw = !shouldDraw;
    }
  }
}

async function handleOnLoad() {
  var provider;
  if (window.ethereum) {
    provider = new Web3(ethereum);
    eth.setProvider(provider);

    try {
        await ethereum.enable();

        // Once MetaMask is enable, set the contract
        eth.setContract();
    } catch(error) {
        console.error('error');
    }

    // if there is a different web3 provider, set that provider
  } else if (window.web3) {
    provider = new Web3(web3.currentProvider);
    ethereum.setProvider(provider);

    // if the user has not installed MetaMask
  } else {
    console.error("Non-Ethereum browser detected");
  }
}
