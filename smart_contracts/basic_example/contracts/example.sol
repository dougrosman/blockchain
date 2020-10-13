pragma solidity >=0.4.22 < 0.7.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol";

contract DougCoin is ERC20 {
    
    
    constructor() public ERC20("DougCoin", "DGC") {
        
        // msg.sender = your wallet address
        // amount = quantity of tokens (18 decimal places).
        _mint(msg.sender, 1000 * (10 ** uint256(decimals())));
    }
    
}