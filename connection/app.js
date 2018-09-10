const contract = require('truffle-contract');

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

        let carController;
        CarController.deployed().then(function (instance) {
            carController = instance;
            return carController.mintUniqueTokenTo(account, carInfo.vin, carInfo.bmc, 'http://',
                { from: owner, gas: 300000 });
        }).then(function (value) {
            callback(getEvent(value, 'NewCar'));
        }).catch(function (e) {
            console.log(e);
            callback('Error 404');
        });
    },
};
