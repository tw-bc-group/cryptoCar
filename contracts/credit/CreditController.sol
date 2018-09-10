pragma solidity ^0.4.23;

import "./CreditToken.sol";
import "../car/CarController.sol";
import "../ContractManager.sol";

contract CreditController is CreditToken {
    event NewCredit(uint carTokenId, uint gained);

    address managerAddress;
    uint public mileageRate = 10;

    function gainCreditByMileage(uint _carTokenId, uint _increasedMileage) external
    {
        CarController _CarController = getCarController();
        require(_CarController.ownerOf(_carTokenId) == msg.sender);

        transfer(msg.sender, _increasedMileage / mileageRate);
        emit NewCredit(_carTokenId, _increasedMileage / mileageRate);
    }

    function setMileageRate(uint _mileageRate) external onlyOwner
    {
        mileageRate = _mileageRate;
    }

    function setManagerAddress(address _managerAddress) public onlyOwner
    {
        managerAddress = _managerAddress;
    }

    function getCarController() private view returns (CarController)
    {
        ContractManager _manager = ContractManager(managerAddress);
        address _carControllerAddress = _manager.getAddress("CarController");
        return CarController(_carControllerAddress);
    }
}