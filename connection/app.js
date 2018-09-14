const contract = require('truffle-contract');
const carDetailTemplate = require('./carDetailTemplate');
const poiFeaturesTemplate = require('./poiFeaturesTemplate');
const poi = require('./poi');
const _ = require('lodash');
const notify = require('./notify');

const carController_artifact = require('../build/contracts/CarController.json');
const CarController = contract(carController_artifact);

const getEvent = (result, eventName) => {
    for (let i = 0; i < result.logs.length; i++) {
        const log = result.logs[ i ];

        if (log.event === eventName) {
            return log;
        }
    }
};

const getFloatArray = (inputString) => _.map(_.split(inputString, ','), str => parseFloat(str));

let accounts = [];
let owner;
let counter = {
    10000: 0,
    20000: 0
};

module.exports = {
    start: function () {
        const self = this;

        CarController.setProvider(self.web3.currentProvider);

        self.web3.eth.getAccounts(function (err, accs) {
            if (err != null) {
                alert('There was an error fetching your accounts.');
                return;
            }

            if (accs.length == 0) {
                alert('Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.');
                return;
            }
            accounts = accs;
            owner = accs[ 0 ];
        });
    },
    newCar: function (account, carInfo, callback) {
        const self = this;

        CarController.setProvider(self.web3.currentProvider);
        CarController.deployed().then(function (instance) {
            return instance.mintUniqueTokenTo(account, carInfo.vin, carInfo.bmc,
                { from: owner, gas: 300000 });
        }).then(function (value) {
            callback(getEvent(value, 'NewCar'));
        }).catch(function (e) {
            console.log(e);
            callback('Error 404');
        });
    },
    detail: function (VIN, callback) {
        const self = this;

        CarController.setProvider(self.web3.currentProvider);
        CarController.deployed().then(function (instance) {
            return instance.tokenIdToCarInfo.call(parseInt(VIN));
        }).then(function (value) {
            const [ tokenId, bcm, navigatedMileage ] = value;
            callback(carDetailTemplate.buildCarDetail(parseInt(tokenId), bcm, navigatedMileage));
        });
    },
    features: function (boundingbox, scale, position, heading, VIN, callback) {
        const self = this;
        const [ lat0, lon0, lat1, lon1 ] = getFloatArray(boundingbox);
        // Note: LBS give the lat as first, lon as second
        const [ selfLat, selfLon ] = getFloatArray(position);

        poi.savePosition(selfLon, selfLat, VIN);
        poi.getPoiInRange(
            lon0,
            lat0,
            lon1,
            lat1,
            VIN,
            (pois) => callback(poiFeaturesTemplate.buildFeatures(pois))
        );

        // self.addNavigatedMileage(VIN, selfLon, selfLat);
        self.meetingCar(VIN, selfLon, selfLat);
    },
    addNavigatedMileage: function (VIN, selfLon, selfLat) {
        const self = this;

        CarController.setProvider(self.web3.currentProvider);
        poi.calcMovedDistance(VIN, selfLon, selfLat, (distance) => {
            console.log(distance);
            CarController.deployed().then(function (instance) {
                return instance.addNavigatedMileage(parseInt(VIN), distance, { from: owner });
            }).catch(function (e) {
                console.log(e);
            });
        });
    },
    meetingCar: function (VIN, selfLon, selfLat) {
        const self = this;

        CarController.setProvider(self.web3.currentProvider);
        poi.meetingCar(VIN, selfLon, selfLat, (poi) => {
            if (_.isEmpty(poi)) {
                return;
            }

            CarController.deployed().then(function (instance) {
                if (counter[poi[0]] < 1) {
                    setTimeout(function () {
                        notify.notifyCarsOwner('CRYPTOCAR', 'LE43X8HB6KZ000013', function () {
                        });
                        // notify.notifyCarsOwner("CRYPTOCAR", "WDD217LJ4XG002440", function(){});

                    }, 40000);
                    counter[poi[0]] = counter[poi[0]]++;
                }

                return instance.meetCar(parseInt(VIN), parseInt(poi[ 0 ][ 0 ]), { from: owner, gas: 300000 });
            }).catch(function (e) {
                console.log(e);
            });
        });
    },
    mockCars: function () {
        const cars = [ '39.91427250,116.43488660', '39.91205500,116.43530100', '39.90662,116.401497', '39.905748,116.406276' ];
        for (let i = 0; i < cars.length; i++) {
            const t = getFloatArray(point);
            poi.savePosition(t[ 1 ], t[ 0 ], 20000 + i);
        }
    }
};
