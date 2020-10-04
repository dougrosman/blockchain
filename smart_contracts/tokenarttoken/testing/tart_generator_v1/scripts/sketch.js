let t; 

function setup() {
  createCanvas(600, 600);
  background(0);
  
  t = new Tart(false);
  
 
  
  t.display(0, 0, 400, 0, false);
  
  print(t.tartID);
  print("ID length: " + t.tartID.length);
  print("Grid Size: " + t.gridSize);
  print("Num Colors: " + t.numColors);
  print("Color Indices: " + t.colors);
  print("Palette: " + t.colorNames);
}

// function draw() {
//   //background(255);
  
  
// }

 
