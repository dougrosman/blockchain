///// P5 /////
let rows;
let colors = [];
let numColors;
let size;
let margin;
var shouldDraw;
let translateVal;
let newPalette;

function setup() {
  let canvas = createCanvas(500, 500);
  canvas.parent("coming-soon");

  textFont('Dosis');
  textSize(20);
  
  shouldDraw = true;
  newPalette = true;
  noStroke();
  
  rows = 6;
  size = (width/2)/rows;
  margin = size/4;
  numColors = 6;

  colors = createPalette(numColors);
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
    //drawPalette(10, 20);
    //drawText(width/2, 550);
  }
  
  if(shouldDraw) {
    colors = createPalette(Math.floor(random(1, 13)));
    numColors = colors.length;
    
    translateVal = (size/2)*(rows/2) + ((rows-1)*margin)/2;
    size = (width/2)/rows;
    margin = size/4;
    //drawDebug();
    push();
      translate(translateVal, translateVal);
      generatePattern(rows, colors);
    pop();
    drawText(width/2, 450);
    drawPalette(10, 40);
    
    shouldDraw = !shouldDraw;
  }
  
}

function generatePattern(rows, _colors) {
  background(color("fff"));
  for(let y = 0; y < rows; y++) {
    for(let x = 0; x < rows; x++) {
      push();
        translate(x*margin, y*margin);
        translate(x*size, y*size);
        fill(random(_colors));
        stroke(0, 50);
        rect(margin, margin, size, size);
      pop();
    }
  }
}

function createPalette(num) {
  
  let _colors = [];
  let indexArray = [];
  for(let i = 0; i < num; i++) {
    let randomIndex = Math.floor(random(colorBankArray.length));
    let c = color(`${colorBankArray[randomIndex][1]}`);
    let cName = colorBankArray[randomIndex][0];
    console.log(cName+ ": " + c);
    
    _colors.push(c);
  }
  console.log("\n\n");
  return _colors;
}

function drawText(x, y) {
  
  let myStr = `Grid = ${rows} X ${rows} \t # Colors = ${numColors}`;
  let possibilities;
  if(numColors == 1){
    possibilities = 1;
  } else {
    possibilities = Math.pow((rows*rows), numColors);
  }
  let myStr2 = `# possible patterns: ${commas(possibilities)}`;
  let strWidth = textWidth(myStr);
  let strWidth2 = textWidth(myStr2);
  
  fill(0);
  text(myStr, x-strWidth/2, y);
  text(myStr2, x-strWidth2/2, y+22);
  
}

function commas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function drawPossibilities(x, y) {
  
  myStr = `Grid = ${rows} X ${rows} \t # Colors = ${numColors}`;
  strWidth = textWidth(myStr);
  
  fill(0);
  text(myStr, x-strWidth/2, y);
  
}

function drawPalette(x, y) {
  
  fill(0);
  myStr = "Palette:\t"
  strWidth = textWidth(myStr);
  
  text("Palette:", x, y+5);
  
  for(let i = 0; i < colors.length; i++) {
    let myColor = colors[i];
    fill(myColor);
    stroke(0, 50);
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
  
  if(key == 'n') {
    rows = Math.floor(random(1, 13));
    shouldDraw = !shouldDraw;
    
  }
  if(key == 'g')
  {
    push();
      translate(translateVal, translateVal);
      generatePattern(rows, colors);
    pop();
    drawText(width/2, 450);
    drawPalette(10, 40);
  }
    
}
    
async function handleOnLoad() {
  var provider; 
  if (window.ethereum) {
    provider = new Web3(ethereum); 
    eth.setProvider(provider);

    try {
        await ethereum.enable();

        // Only after Metamask is enabled. 
        eth.setContract();
    } catch(error) {
        console.error('error');
        
    }
  } else if (window.web3) {
    provider = new Web3(web3.currentProvider);
    ethereum.setProvider(provider);
  } else {
    console.error("Non-Ethereum browser detected"); 
  }
}