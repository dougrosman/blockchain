///// P5 /////
let rows;
let colors = [];
let numColors;
let size;
let margin;
var shouldDraw;
let translateVal;
let newPalette;
let tokenID;

function setup() {
  let canvas = createCanvas(800, 800);
  canvas.parent("print-generator");

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
    push();
      rectMode(CENTER);
      noFill();
      strokeWeight(2);
      stroke("#aaa");
      //rect(width/2, height/2, width/1.4 - margin, height/1.4 - margin);
    pop();
  
  
  
  translateVal = (size/2)*(rows/2) + ((rows-1)*margin)/2;
  size = (width/2)/rows;
  margin = size/4;
  
  if(newPalette) {
    numColors = Math.floor(random(rows))+1;
    colors = createPalette(numColors);
    
    newPalette = !newPalette;
    push();
      translate(translateVal, translateVal);
      generatePattern(rows, colors);
    pop();
  }
  
  if(shouldDraw) {
    
    numColors = Math.floor(random(rows))+1;
    print(numColors);
    colors = createPalette(numColors);
    tokenID = generateTokenID(colors);
    console.log("ID: " + tokenID);
    console.log(colors);
    //numColors = rows;

    size = (width/2.)/rows;
    margin = size/4.;
    translateVal = (size/2.)*(rows/2.) + ((rows-1)*margin)/2.;


    push();
      translate(translateVal, translateVal);
      generatePattern(rows, colors);
    pop();
    // drawText(width/2, height-(height/10));
    // drawPalette(10, height/10);
    
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
        //fill(random(_colors));
        fill(colors[Math.floor(random(colors.length))][1]);
        stroke(0, 50);
        rect(margin, margin, size, size);
      pop();
    }
  }
}


function createPalette(num) {
  
  let _colors = [];
  let indexArray = [];

  while (indexArray.length < num) {

    let randomNum = Math.floor(random(colorBankArray.length));

    if (indexArray.indexOf(randomNum) === -1) {
      indexArray.push(randomNum);
    }
  }

  for(let i = 0; i < indexArray.length; i++) {
    let index = indexArray[i];
    let cName = colorBankArray[index][0];
    let c = color(`${colorBankArray[index][1]}`);
    let colorPair = [cName, c];
    _colors.push(colorPair);
  }
  _colors.sort();
  //console.log(_colors);
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
    fill(colors[i][1]);
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
    //drawText(width/2, height-(height/10));
    //drawPalette(10, height/10);
  }

  if(key == 's') {
    save(tokenID+".png");
  }
    
}

// all twelve colors followed by the number of rows

function generateTokenID(_colors) {

  let _tokenID = "1";
  let colorArray = _colors;

  // add number of rows to ID
  let numColors = colorArray.length;

  if(rows < 10) {
    _tokenID += ("0" + rows);
  } else {
    _tokenID += rows;
  }

  // add all colors to ID
  for(let i = 1; i < 13; i++) {

    let numNoColor = 12 - numColors;

    if(i <= numNoColor) {
      _tokenID += "000";
    } else {
      let currentColor = colorArray[(i-numNoColor)-1][0];
      //console.log("currentColor: " + currentColor);
      let colorIndex = colorNamesArray.indexOf(currentColor);
      if(colorIndex < 10) {
        colorIndex = "00" + colorIndex;
      } else if(colorIndex > 9 && colorIndex < 100) {
        colorIndex = "0" + colorIndex;
      }
      //console.log("indexOf: " + colorIndex);
      _tokenID += colorIndex;
    }
  }

  return _tokenID;
}
    
