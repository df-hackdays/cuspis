const address = "0x3f2b083c7c51c4e6e9acc188288f26d2bb5cd2d3"
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