import { ethers } from "./libs/ethers-5.0.esm.min.js";
console.log("ok");

// A Web3Provider wraps a standard Web3 provider, which is
// what Metamask injects as window.ethereum into each page
const provider = new ethers.providers.Web3Provider(window.ethereum)


// The Metamask plugin also allows signing transactions to
// send ether and pay to change state within the blockchain.
// For this, you need the account signer...
const signer = provider.getSigner();
signer.getAddress().then(d => console.log(d)).catch(err => console.log(err));

const doug1 = "0x6935874D51CD8160791566C7741ac8305255d263";
const doug2 = "0xFd892bB9b092294ec828B4cC4Ad8c621030c92B2";

provider.getBlockNumber()
            .then((data) => console.log(data))
            .catch((err) => console.log(err));

provider.getBalance(doug1)
                .then(b => printBalance(b))
                .catch(err => console.log(err));
  

function printBalance(b) {
  console.log(ethers.utils.formatEther(b));
}              


const contractAddress = "0xB583DDA779b86D598Dbf597A6b540972f5AFdEB1";
// const contractABI = [
//   "function name() public view returns (string memory)",
//   "function symbol() public view returns (string memory)",
//   "function decimals() public view returns (uint8)",
//   "function totalSupply() public view override returns (uint256)",
//   "function balanceOf(address account) public view override returns (uint256)",
//   "function transfer(address recipient, uint256 amount) public virtual override returns (bool)",
//   "function allowance(address owner, address spender) public view virtual override returns (uint256)",
//   "function approve(address spender, uint256 amount) public virtual override returns (bool)",
//   "function transferFrom(address sender, address recipient, uint256 amount) public virtual override returns (bool)",
//   "function increaseAllowance(address spender, uint256 addedValue) public virtual returns (bool)",
//   "function decreaseAllowance(address spender, uint256 subtractedValue) public virtual returns (bool)",
// ];

const contractABI = [
    "function name() public view returns (string memory)",
    "function symbol() public view returns (string memory)",
    "function decimals() public view returns (uint8)",
    "function totalSupply() public view returns (uint256)",
    "function balanceOf(address account) public view returns (uint256)",
    "function transfer(address recipient, uint256 amount) public returns (bool)",
    "function allowance(address owner, address spender) public view returns (uint256)",
    "function approve(address spender, uint256 amount) public returns (bool)",
    "function transferFrom(address sender, address recipient, uint256 amount) public returns (bool)",
    "function increaseAllowance(address spender, uint256 addedValue) public returns (bool)",
    "function decreaseAllowance(address spender, uint256 subtractedValue) public returns (bool)",
  ];

const tokenContract = new ethers.Contract(contractAddress, contractABI, provider);

async function doThings() {


  
}

// // Send 1 ether to an ens name.
// const tx = signer.sendTransaction({
//   to: doug2,
//   value: ethers.utils.parseEther("1.0")
// });
