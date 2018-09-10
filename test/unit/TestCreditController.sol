pragma solidity ^0.4.23;

import "truffle/Assert.sol";
import "../../contracts/credit/CreditController.sol";

contract TestCreditController {
    CreditController creditController;

    constructor() public {
        creditController = new CreditController();
    }

    function test_set_credit_rate_successfully() public {
        uint _expectedRate = 314;

        creditController.setMileageRate(314);
        uint actual = creditController.mileageRate();
        Assert.equal(actual, _expectedRate, "Should set mileageRate successfully");
    }
}