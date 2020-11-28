ethereum.autoRefreshOnNetworkChange = false;
ethereum.enable();

const provider = new ethers.providers.Web3Provider(window.ethereum);
let signer = provider.getSigner();
const contractAddress = "0xECe0c11ff374DE42f3cD6C4c3Af05e9FF60fdEa0";
const contractABI = [
  "function awardItem(address player, string memory tokenURI) public",
  "function balanceOf(address account) public view returns (uint256)",
  "function tokenOfOwnerByIndex(address owner, uint256 index) public view returns (uint256)",
  "function totalSupply() public view returns (uint256)",
  "function tokenByIndex(uint256 index) public view returns (uint256)",
  "function safeTransferFrom(address from, address to, uint256 tokenId) public",
  "function tokenURI(uint256 tokenId) public view returns (string memory)"
];

let address; // address of the current metamask account
let totalSupply; // total supply of COLR of current metamask account
let existingTokens = []; // an array of ALL minted color tokens
let signerTokens = []; // an arry of all minted color tokens owned by current metamask account

const contract = new ethers.Contract(contractAddress, contractABI, provider);
const tokenWithSigner = contract.connect(signer);

const kio = "0xeE801da95f2C111941022cDf72A08938Ce703ECf";
const shannon = "0x87bFCDB9D99B388FeCF6454c5Bd689Ae217E392B";

main();

async function main() {
  address = await signer.getAddress();

  let sampleObit = "this is a test"

  $('#mint-obit').click(function(){
    tokenWithSigner.awardItem(address, sampleObit);
  })

  $('#display-obits').click(async function(){
    let totalSupply = await contract.totalSupply();
    let shannonBalance = await contract.balanceOf(address);
    totalSupply = +totalSupply;
    shannonBalance = +shannonBalance;
    console.log("Total supply: " + totalSupply);
    console.log("shannon's Balance: " + shannonBalance);

    let shannonTokens = [];

    for(let i = 0; i < shannonBalance; i++) {
      let t = await contract.tokenOfOwnerByIndex(shannon, i);
      t = +t;
      shannonTokens.push(t);
    }

    console.log(shannonTokens);

    let obitURI = await contract.tokenURI(shannonTokens[shannonTokens.length-1]);

    // obtURI = JSON.parse(obitURI);
    console.log(obitURI);

    // let obitURIJSON = JSON.parse(obitURI);

    // console.log(obitURIJSON.name);

    // let sampleObitJSON = JSON.parse(sampleObit)
    // console.log(sampleObitJSON.obituary);

    // $('.obit__name-obituary').text(sampleObitJSON.obituary);
    
  })
}