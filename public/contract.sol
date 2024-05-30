// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ID {
    address public owner;
    mapping(address => bool) public manager;
    uint ind;

    struct Card {
        bool active;
        string name;
        string class;
        uint roll;
        string mobile;
        string addr;
        address addedBy;
    }

    Card[] public cards;

    constructor(uint _ind) {
        owner = msg.sender;
        ind = _ind;
    }

    modifier onlyOwner() {
        require(owner == msg.sender, "You are not the owner of this contract");
        _;
    }

    function addManager(address mgr) public onlyOwner {
        manager[mgr] = true;
    }

    function deactivateManager(address mgr) public onlyOwner {
        manager[mgr] = false;
    }

    modifier onlyManager() {
        require(manager[msg.sender] == true, "You are not an active manager");
        _;
    }

    function newCard(
        string memory _name,
        string memory _class,
        uint _roll,
        string memory _mobile,
        string memory _addr
    ) public onlyManager {
        cards.push(
            Card({
                active: true,
                name: _name,
                class: _class,
                roll: _roll,
                mobile: _mobile,
                addr: _addr,
                addedBy: msg.sender
            })
        );
    }

    function deactivateCard(uint index) public onlyManager {
        require(index < cards.length, "Invalid card index");
        cards[index].active = false;
    }

    function getCardDetails(
        uint index
    )
        public
        view
        returns (
            bool active,
            string memory name,
            string memory class,
            uint roll,
            string memory mobile,
            string memory addr,
            address addedBy
        )
    {
        require(index < cards.length, "Invalid card index");
        Card storage card = cards[index];
        return (
            card.active,
            card.name,
            card.class,
            card.roll,
            card.mobile,
            card.addr,
            card.addedBy
        );
    }
}
