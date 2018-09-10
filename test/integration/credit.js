const CreditController = artifacts.require('CreditController');

const utils = require('../utils');
const { assertVMException } = utils;

contract('credit', (accounts) => {
    let creditController;
    before(async () => {
        creditController = await CreditController.deployed();
    });

    it('distributes token supply', async () => {
        const creditBalance = await creditController.balanceOf.call(accounts[ 0 ]);

        assert.equal(creditBalance.toString(), '21000000');
    });

    it('set mileage rate failed when is not contract owner', async () => {
        try {
            await creditController.setMileageRate(500, { from: accounts[ 1 ] });
            assert.fail();
        } catch (err) {
            assertVMException(err);
        }
    });

    it('set mileage rate successfully when is contract owner', async () => {
        const tx = await creditController.setMileageRate(500, { from: accounts[ 0 ] });
        assert.isOk(tx);

        const mileageRate = await creditController.mileageRate();
        assert.equal(mileageRate.toString(), '500');
    });

    // it("can gain credit token successfully", async () => {
    //
    // });


});