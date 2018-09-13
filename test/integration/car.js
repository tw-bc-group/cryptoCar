const CarController = artifacts.require('CarController');

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
    let carController;
    before(async () => {
        carController = await CarController.deployed();
    });

    it('should create new crypto car successfully when is contract owner', async () => {
        const expectTokenId = 1000;
        const expectBcm = 'Mercedes-AMG S 63 4MATIC Coupe';

        await carController.mintUniqueTokenTo(accounts[ 1 ], expectTokenId, expectBcm, { from: accounts[ 0 ] })
            .then(async (result) => {
                let event = getEvent(result, 'NewCar');
                const _tokenId = event.args.tokenId.toNumber();
                assert.equal(_tokenId, expectTokenId);

                const carInfo = await carController.tokenIdToCarInfo.call(_tokenId);
                const [ , bcm, ] = carInfo;
                assert.equal(bcm, expectBcm);
            });
    });

    it('should create new crypto car failed when is not contract owner', async () => {
        const expectTokenId = 1001;

        try {
            await carController.mintUniqueTokenTo(accounts[ 1 ], expectTokenId, 'Mercedes-AMG S 63 4MATIC Coupe', { from: accounts[ 1 ] })
            assert.fail();
        } catch (err) {
            assertVMException(err);
        }

    });

    it('should add navigated mileage successfully', async () => {
        const expectTokenId = 1002;

        await carController.mintUniqueTokenTo(accounts[ 1 ], expectTokenId, 'Mercedes-AMG S 63 4MATIC Coupe', { from: accounts[ 0 ] });

        await carController.addNavigatedMileage(expectTokenId, 20);
        const [ , , navigatedMileage ] = await carController.tokenIdToCarInfo(expectTokenId);
        assert.equal(navigatedMileage.toNumber(), 20);
    });

    it('should add met car successfully', async () => {
        const expectTokenId = 1003;
        const otherTokenId = 1004;

        await carController.mintUniqueTokenTo(accounts[ 1 ], expectTokenId, 'Mercedes-AMG S 63 4MATIC Coupe', { from: accounts[ 0 ] });
        await carController.mintUniqueTokenTo(accounts[ 1 ], otherTokenId, 'Mercedes-AMG S 63 4MATIC Coupe', { from: accounts[ 0 ] });

        await carController.meetCar(expectTokenId, otherTokenId);
        const metCar = await carController.metCars.call(expectTokenId, 0);
        assert.equal(metCar.toNumber(), otherTokenId);
    });

});