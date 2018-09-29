const address = "0x31aba3ebd76c5a13132affa0170c6dc3a4b44895"
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
    "inputs": [],
    "name": "getCount",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_uuid",
        "type": "string"
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
];
export {address, ABI}