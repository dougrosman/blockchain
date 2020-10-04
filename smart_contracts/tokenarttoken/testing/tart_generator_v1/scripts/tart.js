// Tart class
class Tart {
    constructor(legacy) {
      this.tartID = this.generateTartID();
      let unpackedString = this.unpackTartID(this.tartID);
      this.gridSize = unpackedString[0];
      
      this.colors = unpackedString.slice(1, unpackedString.length);
      this.colorNames = [];
      
      for(let i = 0; i < this.colors.length; i++) {
        this.colorNames.push(colorBankArray[this.colors[i]][0]);
      }
      
      this.numColors = this.colors.length;
      this.pattern = [];    
    }
    
    ////////////////// GENERATE TART //////////////////
    
    // function to generate a TART ID
    generateTartID() {
      let indexArray = [];
  
      // all strings start with '1'
      let tartStr="1";
  
      // generate gridSize
      let gridSize = floor(random(1, 13));
  
      // add sets of integers as strings
      if(gridSize < 10) {
        tartStr+="0"+gridSize;
      } else {
        tartStr+=gridSize;
      }
      
      // randomly determine a number of colors where the grid size is the max
      // allowed number of colors
      let numColors = floor(random(1, gridSize+1));
  
      // add sets of 3 0s for however many empty spaces there are
      for(let i = 0; i < 12-numColors; i++) {
        tartStr+="000";
  
      }
  
      // fill a temporary array with random indices for picking colors
      while (indexArray.length < numColors) {
  
        let randomNum = floor(random(1, colorBankArray.length));
  
        // only add the number if it isn't already in the array
        if (indexArray.indexOf(randomNum) === -1) {
          indexArray.push(randomNum);
        }
      }
      // sorts the array to be ordererd numerically
      indexArray.sort((a,b) => a-b);
  
      //
      for(let i = 0; i < indexArray.length; i++) {
  
        let indexStr = indexArray[i];
  
        if(indexStr < 10) {
          tartStr+="00"+indexStr;
        } else if(indexStr > 9 && indexStr < 100) {
          tartStr+="0"+indexStr;
        } else {
          tartStr+=indexStr;
        }
      }
      //print("tokenID: " + tartStr);
  
      return tartStr;
    }
    
    
    ////////////////// UNPACK TART //////////////////
    
    // function to unpack the tartID and separate its elements into an array
    unpackTartID(_tartStr, legacy) {
  
      let tartInfo = [];
  
      // extract the grid size from the 2nd and 3rd characters
      let gridSize = int(_tartStr.substring(1, 3));
      tartInfo.push(gridSize);
  
      // determine where to start grabbing colors from the string
      let startIndex = ((12-gridSize)*3) + 3;
  
      for(let i = startIndex; i < _tartStr.length; i+=3) {
  
        let currIndex = _tartStr.substring(i, i+3);
        //print(currIndex);
        
        // only add color indices if there are colors
        if(currIndex !== "000") {
          if(legacy) {
            tartInfo.push(int(currIndex)+1);
          } else {
            tartInfo.push(int(currIndex));
          }
        }
      }
      //print(patternInfo);
      return tartInfo;
    }
    
    ////////////////// DISPLAY TART //////////////////
  
    // function to display a TART
    
    display(x, y, size, padding, outline) {
      
      let weight = map(size, 1, 2000, 0.1, 2.0);
      
      if(outline) {
        strokeWeight(weight);
        stroke(220);
      } else {
        noStroke();
      }
      
      let fullSquareSize;
      let fullMarginSize;
      let allocatedSquareSpace;
      let allocatedMarginSpace;
      let squareSize;
      let marginSize;
      
      if(padding > 0) {
        if(this.gridSize == 1) {
          squareSize = (size - (size/padding));
          marginSize = 0;
        } else {
          // calculate a square size where each square would take up the full size
          fullSquareSize = (size - (size/padding))/this.gridSize;
  
          // calculate a margin that is a 1/5 the size of the square
          fullMarginSize = fullSquareSize/5.0;
  
          allocatedSquareSpace = (size - (size/padding)) - ((this.gridSize - 1)*fullMarginSize);
          allocatedMarginSpace = (size - (size/padding)) - allocatedSquareSpace;
  
          squareSize = allocatedSquareSpace/this.gridSize;
          marginSize = allocatedMarginSpace/(this.gridSize - 1);
        }
        
        for(let i = 0; i < this.gridSize; i++) {
        for(let j = 0; j < this.gridSize; j++) {
          
          let colorIndex = this.colors[floor(random(this.colors.length))]; 
          fill(colorBankArray[colorIndex][1]);
          rect((size/(padding*2))+x+(i*squareSize + i*marginSize), (size/(padding*2))+y+(j*squareSize + j*marginSize), squareSize, squareSize);
          
        }
      }
        
      } else {
        
        if(this.gridSize == 1) {
          squareSize = size;
          marginSize = 0;
        } else {
          // calculate a square size where each square would take up the full size
          fullSquareSize = size/this.gridSize;
  
          // calculate a margin that is a 1/5 the size of the square
          fullMarginSize = fullSquareSize/5.0;
  
          allocatedSquareSpace = size - ((this.gridSize - 1)*fullMarginSize);
          allocatedMarginSpace = size - allocatedSquareSpace;
  
          squareSize = allocatedSquareSpace/this.gridSize;
          marginSize = allocatedMarginSpace/(this.gridSize - 1);
        }
        
        for(let i = 0; i < this.gridSize; i++) {
          for(let j = 0; j < this.gridSize; j++) {
          
            let colorIndex = this.colors[floor(random(this.colors.length))]; 
            fill(colorBankArray[colorIndex][1]);
            rect(x+(i*squareSize + i*marginSize), y+(j*squareSize + j*marginSize), squareSize, squareSize);
          }
        }
      }
    }
  }  