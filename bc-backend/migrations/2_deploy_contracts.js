var Storage = artifacts.require("Storage.sol");
var Token = artifacts.require("Token.sol")

module.exports = function(deployer) {
  deployer.deploy(Storage);
  deployer.deploy(Token);
};