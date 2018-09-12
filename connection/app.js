const contract = require('truffle-contract');
const carDetailTemplate = require('./carDetailTemplate');
const poiFeaturesTemplate = require('./poiFeaturesTemplate');
const poi = require('./poi');
const _ = require('lodash');

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
            return instance.mintUniqueTokenTo(account, carInfo.vin, carInfo.bmc, 'http://',
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
            return instance.tokenIdToCarInfo.call(VIN);
        }).then(function (value) {
            const [ tokenId, bcm, navigatedMileage ] = value;
            callback(carDetailTemplate.buildCarDetail(tokenId, bcm, navigatedMileage));
        });
    },
    features: function (boundingbox, scale, position, heading, VIN, callback) {
        const self = this;
        const [ longitude0, latitude0, longitude1, latitude1 ] = getFloatArray(boundingbox);
        const [ selfLon, selfLat ] = getFloatArray(position);

        poi.savePosition(selfLon, selfLat, VIN);
        poi.getPoiInRange(
            longitude0,
            latitude0,
            longitude1,
            latitude1,
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
            CarController.deployed().then(function (instance) {
                return instance.addNavigatedMileage(VIN, distance, { from: owner });
            }).catch(function (e) {
                console.log(e);
            });
        });
    },
    meetingCar: function (VIN, selfLon, selfLat) {
        const self = this;

        CarController.setProvider(self.web3.currentProvider);
        poi.meetingCar(selfLon, selfLat, (poi) => {
            if (!poi) {
                return;
            }

            CarController.deployed().then(function (instance) {
                return instance.meetCar(VIN, parseInt(poi[ 0 ][ 0 ]), { from: owner, gas: 300000 });
            }).catch(function (e) {
                console.log(e);
            });
        });
    }
};
