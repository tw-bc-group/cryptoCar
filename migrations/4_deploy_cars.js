const ContractManager = artifacts.require('ContractManager');
const CarController = artifacts.require('CarController');

module.exports = function (deployer) {
    deployer.deploy(CarController)
        .then(() => {
            return CarController.deployed();
        })
        .then(carController => {
            carController.setManagerAddress(ContractManager.address);
            return ContractManager.deployed();
        })
        .then(manager => {
            return manager.setAddress('CarController', CarController.address);
        });
};
