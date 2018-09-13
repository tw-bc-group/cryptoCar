pragma solidity ^0.4.23;

import "openzeppelin-solidity/contracts/token/ERC721/ERC721Token.sol";
import "openzeppelin-solidity/contracts/ownership/Ownable.sol";

contract CarToken is ERC721Token, Ownable {
    string public _name = "CryptoCar";
    string public _symbol = "Car";

    constructor () public
    ERC721Token(_name, _symbol)
    {
    }

    event NewCar(uint tokenId);
    mapping(uint => CarInfo) public tokenIdToCarInfo;
    mapping(uint => uint[]) public metCars;
    struct CarInfo {
        uint tokenId;
        string bcm;
        uint navigatedMileage;
    }

    function mintUniqueTokenTo(
        address _to,
        uint _tokenId,
        string _bcm
    ) external onlyOwner
    {
        super._mint(_to, _tokenId);
        tokenIdToCarInfo[_tokenId] = CarInfo(_tokenId, _bcm, 0);
        emit NewCar(_tokenId);
    }

}