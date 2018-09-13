pragma solidity ^0.4.23;

import "./CarToken.sol";

contract CarController is CarToken {
    event MeetingOtherCar(uint tokenId, uint otherTokenId);

    function addNavigatedMileage(uint _tokenId, uint _increasedMileage)
        external onlyOwner
    {
        tokenIdToCarInfo[_tokenId].navigatedMileage += _increasedMileage;
    }

    function meetCar(uint _tokenId, uint _otherTokenId)
        external onlyOwner
    {
        metCars[_tokenId].push(_otherTokenId);
        emit MeetingOtherCar(_tokenId, _otherTokenId);
    }
}