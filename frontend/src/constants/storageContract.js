const address = "0xbb2bdf586d13ba076ff43d4d50f97dda0346be44"
const ABI = [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "dataType",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "timestamp",
          "type": "string"
        },
        {
          "indexed": false,
          "name": "uuid",
          "type": "string"
        }
      ],
      "name": "addContentEvent",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_uuid",
          "type": "string"
        },
        {
          "name": "_dataType",
          "type": "uint256"
        },
        {
          "name": "_timestamp",
          "type": "string"
        }
      ],
      "name": "addContent",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "user",
          "type": "address"
        }
      ],
      "name": "getStorage",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        },
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ]
export {address, ABI}