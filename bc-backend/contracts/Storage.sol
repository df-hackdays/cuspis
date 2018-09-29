pragma solidity ^0.4.23;

contract Storage {

    event addContentEvent(address indexed user, uint dataType, string timestamp, string uuid);

    struct content {
        uint data_type;
        string uuid;
        string timestamp;
    }
    
    mapping(string => content) contentMap; 

    uint count;

    function addContent(string _uuid, uint _dataType, string _timestamp) public {
        contentMap[_uuid] = content(_dataType, _uuid, _timestamp);
        count++;
        emit addContentEvent(msg.sender, _dataType, _timestamp, _uuid);
    }

    function getCount() public view returns (uint) {
        return count;
    }

    function getStorage(string _uuid) public view returns (uint, string, string) {
        return (contentMap[_uuid].data_type, contentMap[_uuid].uuid, contentMap[_uuid].timestamp);
    }
}