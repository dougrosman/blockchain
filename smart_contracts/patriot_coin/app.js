import { ethers } from "./libraries/ethers-5.0.esm.min.js";

//$(document).ready(function(){
  
  ethereum.autoRefreshOnNetworkChange = false;
    
    // allows ethereum to connect to browser
  window.ethereum.enable();

  // store the provider (MetaMask, in our case)
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  // store the signer, which is needed to create transactions
  // that permanently change the blockchain
  const signer = provider.getSigner();

  const doug1 = "0x6935874D51CD8160791566C7741ac8305255d263";
  const doug2 = "0xFd892bB9b092294ec828B4cC4Ad8c621030c92B2";
  const otherEnt = "0x6935874D51CD8160791566C7741ac8305255d263";

  const contractAddress = "0x8d4C9dF811A68F6591CDDa4DAC5325A95800A240";
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
    "function reward(uint256 amt) public payable"
  ];
  const contract = new ethers.Contract(contractAddress, contractABI, provider);

  main();

  async function main() {

    const tokenWithSigner = contract.connect(signer);

    //const amount = ethers.utils.parseUnits("10.0", 18);
    
    console.log("amount to send: " + 10);
    // let tx = tokenWithSigner.reward(10);
    
  }

  


//})