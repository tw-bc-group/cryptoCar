pragma solidity ^0.4.23;

import "../ContractManager.sol";
import "../credit/CreditController.sol";
import "./CarToken.sol";

contract CarController is CarToken {
    address managerAddress;
    uint creditRatePerLevel = 10;

    function needCreditCount(uint _carTokenId) public view returns (uint)
    {
        return creditRatePerLevel * tokenIdToCarInfo[_carTokenId].level;
    }

    function levelUp(uint _carTokenId) external returns (uint)
    {
        CreditController _creditController = getCreditController();
        require(_creditController.balanceOf(msg.sender) >= needCreditCount(_carTokenId), 'not sufficient funds');
        return tokenIdToCarInfo[_carTokenId].level++;
    }

    function setCreditRate(uint _creditRate) external onlyOwner
    {
        creditRatePerLevel = _creditRate;
    }


    function setManagerAddress(address _managerAddress) public onlyOwner
    {
        managerAddress = _managerAddress;
    }

    function getCreditController() private view returns (CreditController)
    {
        ContractManager _manager = ContractManager(managerAddress);
        address _creditControllerAddress = _manager.getAddress("CreditController");
        return CreditController(_creditControllerAddress);
    }

}