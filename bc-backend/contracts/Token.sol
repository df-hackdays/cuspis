pragma solidity ^0.4.24;

import "openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol";


contract Token is StandardToken {   
    string public name = "CanadaLearningCode";
    string public symbol = "CLC";
    uint8 public decimals = 5;
    uint public INITIAL_SUPPLY = 100000000000;

    constructor() public {
        totalSupply_ = INITIAL_SUPPLY;
        balances[msg.sender] = INITIAL_SUPPLY;
    }

}