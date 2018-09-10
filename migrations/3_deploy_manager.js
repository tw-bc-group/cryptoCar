const ContractManager = artifacts.require('ContractManager')
const CreditController = artifacts.require('CreditController')

module.exports = (deployer) => {
  
  deployer.deploy(ContractManager)
  .then(() => {
    return ContractManager.deployed()
  })
  .then(manager => {
      manager.setAddress("CreditController", CreditController.address)
  })

};