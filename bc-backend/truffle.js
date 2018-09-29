/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */
var HDWalletProvider = require("truffle-hdwallet-provider");
const mnemonic = "denial direct ozone crazy fashion strategy end family leader ordinary increase carry author fruit lawn";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
      gas: 4500000,
      gasPrice: 10000000000
    },
    ropsten: {
      provider: function() { 
          return new HDWalletProvider(mnemonic, 'https://ropsten.infura.io/v3/b8c4da1ac58b49e9ac430d29e1513bed') 
      },
      gas:4500000,
      gasPrice:65000000000,
      network_id: "3"
    },
    rinkeby: {
      host: "localhost", // Connect to geth on the specified
      port: 8545,
      from: "0x8d45791f5042b8ccec8a853f0db085041a0fa0c7", // default address to use for any transaction Truffle makes during migrations
      network_id: 4,
      gas: 4612388 // Gas limit used for deploys
    }
  }
};
