pragma solidity >=0.4 <=0.7;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol";

contract BasicExampleToken is ERC20 {
    
    constructor() public ERC20("BasicExampleToken", "BET") {
        _mint(msg.sender, 1000 * (10 ** uint256(decimals())));
    }
    
}