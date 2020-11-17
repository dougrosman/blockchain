


ethereum.autoRefreshOnNetworkChange = false;
ethereum.enable();
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
// const contractAddress = "0x0f714e3Ab3bcdb6E00f192cce1f176Ac75dB1fe0"; // old
const contractAddress = "0x8F2580E00De52Dc409651B14268FAf3ca917D1a5";
const contractABI = [
  "function awardItem(address player, uint256 tokenId) public",
  "function balanceOf(address account) public view returns (uint256)",
  "function tokenOfOwnerByIndex(address owner, uint256 index) public view returns (uint256)",
  "function totalSupply() public view returns (uint256)",
  "function tokenByIndex(uint256 index) public view returns (uint256)"
];

let tokenId;
let address;

const contract = new ethers.Contract(contractAddress, contractABI, provider);
const tokenWithSigner = contract.connect(signer);

main();

let colorTokens = [];

async function main() {

  address = await signer.getAddress();
  console.log(address);

  let balance = await contract.balanceOf(address);
  balance = parseInt(balance);
  console.log(balance);

  

  //colorTokens = await getColorsByOwner(address, balance);
  //console.log(colorTokens);

  await displayOwnedColors(address);
  //await checkExisting();

  // store the HTML button in a variable

}

// take in an address, display the owned colors
async function displayOwnedColors(_address) {
  let balance = await contract.balanceOf(_address);
  balance = parseInt(balance);

  // stores an array of ints
  let ownedTokens = await getColorsByOwner(address, balance);

  let ownedColors = idsToColor(ownedTokens);
  console.log("Owned Color Tokens:");
  console.log(ownedColors);

  // create HTML elements with the correct colors
  let tokenCounter = 0;
  for(let i = 0; i < ownedColors.length; i++) {
    let t = ownedColors[i];
    let colorId = "token" + tokenCounter;
    
    let colorDiv =
    `
      <div class="color-token" id="${colorId}">
        <div class="color-token__tile"></div>
        <div class="color-token__hex">#abcdef</div>
      </div>`

    $('.color-gallery').append(colorDiv);

    $(`#${colorId}`).children('.color-token__tile').css("background", `rgb(${t.r}, ${t.g}, ${t.b})`);
    $(`#${colorId}`).children('.color-token__hex').text(`${rgbToHex(t.r, t.g, t.b)}`);
    
    tokenCounter++;
  }
}

// returns an array of ints (the owned colors)
async function getColorsByOwner(_address, _balance) {

  let ids = [];

  for(let i = 0; i < _balance; i++) {
    let currToken = await contract.tokenOfOwnerByIndex(_address, i);
    currToken = parseInt(currToken);
    ids.push(currToken);
  }
  return ids;
}

// convert IDs to RGB Colors, return an array of array[r,g,b]
function idsToColor(_ids) {

  let colors = [];
  for(let i = 0; i < _ids.length; i++) {
    let id = "" + _ids[i];

    let r = parseInt(id.substr(1, 3));
    let g = parseInt(id.substr(4, 3));
    let b = parseInt(id.substr(7, 3));
    let color = {r: r, g: g, b:b}
    colors.push(color);
  }
  return colors;
}

function componentToHex(c) {
  let hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}


async function checkExisting() {
  let preownedTokens = [];
  let totalSupply = await contract.totalSupply();
  totalSupply = parseInt(totalSupply);

  for(let i = 0; i < totalSupply; i++) {
    let currToken = await contract.tokenByIndex(i);
    preownedTokens.push(parseInt(currToken));
  }
  console.log("preowned tokens: " + preownedTokens);

  // generate a random color
  let randomR = Math.floor(Math.random()*256)
  let randomG = Math.floor(Math.random()*256)
  let randomB = Math.floor(Math.random()*256)

  let myColor = 1000000000 + randomR*1000000 + randomG*1000 + randomB;

  while(preownedTokens.indexOf(myColor) > 0)
  {
    randomR = Math.floor(Math.random()*256)
    randomG = Math.floor(Math.random()*256)
    randomB = Math.floor(Math.random()*256)

    myColor = 1000000000 + randomR*1000000 + randomG*1000 + randomB;
  }
  
  console.log("unique color: " + myColor);

  return myColor;
}


async function mintColor() {

  shouldReward = await checkExisting();

  if(shouldReward) {
    tokenWithSigner.awardItem(address, shouldReward);
    shouldReward = false;
  }
}

let button = document.getElementById("generate-color")
let shouldReward = 0;
button.addEventListener("click", async function(){
  // generate color, initiate transaction to mint ownership of color
  await mintColor();
})
