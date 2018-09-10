pragma solidity ^0.4.23;

import "openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol";
import "openzeppelin-solidity/contracts/ownership/Ownable.sol";

contract CreditToken is StandardToken, Ownable {
    string public name = "CryptoCarCredit";
    string public symbol = "CCC";

    uint256 public totalSupply = 21000000;

    constructor() public {
        balances[msg.sender] = totalSupply;
    }
}