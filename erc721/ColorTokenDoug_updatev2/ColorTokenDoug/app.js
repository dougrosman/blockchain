ethereum.autoRefreshOnNetworkChange = false;
ethereum.enable();
const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
const contractAddress = "0x0f714e3Ab3bcdb6E00f192cce1f176Ac75dB1fe0";
const contractABI = [
  "function awardItem(address player, uint256 tokenId) public"
];

let tokenId;
let address = "0x6935874D51CD8160791566C7741ac8305255d263";

const contract = new ethers.Contract(contractAddress, contractABI, provider);
const tokenWithSigner = contract.connect(signer);
// tokenWithSigner.reward(10);


///////////// P5 Code ///////////////

function setup() {
  let cnv = createCanvas(320, 260);
}

function draw() {
  background(0);
}



// store the HTML button in a variable
let button = document.getElementById("generate-color")

let shouldReward = true;
button.addEventListener("click", function(){
  // generate color, initiate transaction to mint ownership of color
  mintColor()

})

function mintColor() {

  // generate a random color
  let randomR = Math.floor(Math.random()*256)
  let randomG = Math.floor(Math.random()*256)
  let randomB = Math.floor(Math.random()*256)

  let myColor = 1000000000 + randomR*1000000 + randomG*1000 + randomB;

  console.log(myColor);

  if(shouldReward) {
    tokenWithSigner.awardItem(address, myColor);
    shouldReward = false;
  }

  // if(randomR < 100 && randomR > 9 ) {
  //   randomR = "0" + randomR
  // } else if(randomR < 10) {
  //   randomR = "00" + randomR
  // }

  // if(randomG < 100 && randomG > 9 ) {
  //   randomG = "0" + randomG
  // } else if(randomG < 10) {
  //   randomG = "00" + randomG
  // }

  // if(randomB < 100 && randomB > 9 ) {
  //   randomB = "0" + randomB
  // } else if(randomB < 10) {
  //   randomB = "00" + randomB
  // }

  

  // call awardItem function


}
