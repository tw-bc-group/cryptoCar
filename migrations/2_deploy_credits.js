const CreditController = artifacts.require('CreditController')

module.exports = function(deployer) {
    deployer.deploy(CreditController)
};
