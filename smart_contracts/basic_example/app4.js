import { ethers } from "./libs/ethers-5.0.esm.min.js";
console.log("ok");

// A Web3Provider wraps a standard Web3 provider, which is
// what Metamask injects as window.ethereum into each page
const provider = new ethers.providers.Web3Provider(window.ethereum)

// The Metamask plugin also allows signing transactions to
// send ether and pay to change state within the blockchain.
// For this, you need the account signer...
const signer = provider.getSigner();

console.log(signer);
//console.log(provider);

// Look up the current block number
let blockNumber = provider.getBlockNumber().then();
// { Promise: 11006450 }

// // Get the balance of an account (by address or ENS name, if supported by network)
// balance = await provider.getBalance("ethers.eth")
// // { BigNumber: "2337132817842795605" }

// // Often you need to format the output to something more user-friendly,
// // such as in ether (instead of wei)
// ethers.utils.formatEther(balance)
// // '2.337132817842795605'

// // If a user enters a string in an input field, you may need
// // to convert it from ether (as a string) to wei (as a BigNumber)
// ethers.utils.parseEther("1.0")
// // { BigNumber: "1000000000000000000" }