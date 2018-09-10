const CarController = artifacts.require('CarController');
const CreditController = artifacts.require('CreditController');

const utils = require('../utils');
const { assertVMException } = utils;

const getEvent = (result, eventName) => {
    for (let i = 0; i < result.logs.length; i++) {
        const log = result.logs[ i ];

        if (log.event === eventName) {
            return log;
        }
    }
};

contract('car', (accounts) => {
    let creditController, carController;
    before(async () => {
        creditController = await CreditController.deployed();
        carController = await CarController.deployed();
    });

    it('should create new crypto car when is contract owner', async () => {
        const expectTokenId = 1000;

        await carController.mintUniqueTokenTo(accounts[ 1 ], expectTokenId, 1, 'http://', { from: accounts[ 0 ] })
            .then(async (result) => {
                let event = getEvent(result, 'NewCar');
                const _tokenId = event.args.tokenId.toNumber();
                assert.equal(_tokenId, expectTokenId);

                const carInfo = await carController.tokenIdToCarInfo.call(_tokenId);
                const [ , bcm, ] = carInfo;
                assert.equal(bcm.toNumber(), 1);
            });
    });

    it('should got level up successfully', async () => {
        const expectTokenId = 1001;

        await creditController.approve.sendTransaction(accounts[ 1 ], 10, { from: accounts[ 0 ] });
        await creditController.transferFrom.sendTransaction(accounts[ 0 ], accounts[ 1 ], 10, { from: accounts[ 1 ] });
        await carController.mintUniqueTokenTo(accounts[ 1 ], expectTokenId, 1, 'http://', { from: accounts[ 0 ] });

        await carController.levelUp(expectTokenId);
        const [ , , level ] = await carController.tokenIdToCarInfo(expectTokenId);
        assert.equal(level.toNumber(), 2);
    });

    it('should got level up failed when credit is not enough', async () => {
        const expectTokenId = 1003;
        await carController.mintUniqueTokenTo(accounts[ 2 ], expectTokenId, 1, 'http://', { from: accounts[ 0 ] });

        try {
            await carController.levelUp(expectTokenId, { from: accounts[ 2 ] });
            assert.fail();
        } catch (err) {
            assertVMException(err);
        }
    });
});