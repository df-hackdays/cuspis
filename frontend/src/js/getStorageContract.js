import Web3 from "web3"
import { address, ABI } from "./../constants/storageContract"
let getStorageContract = new Promise(function (resolve, reject) {
    let web3 = new Web3(window.web3.currentProvider)
    let storageContract = web3.eth.contract(ABI)
    let storageContractInstance = storageContract.at(address)
    resolve(storageContractInstance)
})
export default getStorageContract