import Web3 from "web3"
import { address, ABI } from "./../constants/tokenContract"
let getTokenContract = new Promise(function (resolve, reject) {
    let web3 = new Web3(window.web3.currentProvider)
    let tokenContract = web3.eth.contract(ABI)
    let tokenContractInstance = tokenContract.at(address)
    resolve(tokenContractInstance)
})
export default getTokenContract