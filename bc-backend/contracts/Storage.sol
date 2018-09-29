pragma solidity ^0.4.23;

contract Storage {

    event addContentEvent(address indexed user, uint dataType, string timestamp, string uuid);

    struct content {
        uint data_type;
        string uuid;
        string timestamp;
    }
    
    mapping(address => content) contentMap; 

    uint count;

    function addContent(string _uuid, uint _dataType, string _timestamp) public {
        contentMap[msg.sender] = content(_dataType, _uuid, _timestamp);
        count++;
        addContentEvent(msg.sender, _dataType, _timestamp, _uuid);
    }

    function getStorage(address user) public constant returns (uint, string, string) {
        return (contentMap[msg.sender].data_type, contentMap[msg.sender].uuid, contentMap[msg.sender].timestamp);
    }
}