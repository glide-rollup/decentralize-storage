// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract GlideCertificate {
    struct Author {
        string author_id;
        string author_name;
        string description;
        string email;
        string website;
        string instagram;
        string twitter;
        string linkedin;
        string github;
    }
    
    struct Event {
        uint256 event_id;
        string author_id;
        string event_name;
        uint256 event_date;
        string event_type;
        string description;
    }

    struct Certificate {
        uint256 certificate_id;
        uint256 event_id;
        string recepient_name;
        string email;
    }

    mapping (string => Author) private authors;
    string[] private authorList;

    mapping (uint256 => Event) private events;
    uint256[] private eventList;

    function addAuthor (
        string memory _author_id,
        string memory _author_name, 
        string memory _description, 
        string memory _email, 
        string memory _website, 
        string memory _instagram, 
        string memory _twitter, 
        string memory _linkedin, 
        string memory _github
    ) public {
        authors[_author_id] = Author(_author_id, _author_name, _description, _email, _website, _instagram, _twitter, _linkedin, _github);
        authorList.push(_author_id);
    }

    function getAuthorbyId(string memory _author_id) public view returns (Author memory) {
        return authors[_author_id];
    }

    function addEvent (
        uint256 _event_id,
        string memory _author_id,
        string memory _event_name,
        uint256 _event_date,
        string memory _event_type,
        string memory _description
    ) public {
        events[_event_id] = Event(_event_id, _author_id, _event_name, _event_date, _event_type, _description);
        eventList.push(_event_id);
    }

    function getEventbyId(uint256 _event_id) public view returns (Event memory) {
        return events[_event_id];
    }

    function addCertificate (
        uint256 _certificate_id,
        uint256 _event_id,
        string memory _recepient_name,
        string memory _email
    ) public {
        certificates[_certificate_id] = Certificate(_certificate_id, _event_id, _recepient_name, _email);
        certificateList.push(_certificate_id);
    }

}