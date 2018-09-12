const CarController = artifacts.require('CarController');

module.exports = function (deployer) {
    deployer.deploy(CarController);
};
