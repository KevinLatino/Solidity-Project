// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

contract DonationSystem {

    // Mapping from donor address to the total amount donated
    mapping(address => uint256) public donorBalances;
    uint256 totalBalance;
    
    // Mapping from project address to the total amount received
    mapping(address => uint256) public projectBalances;

    // Event to log donation transactions
    event DonationReceived(address indexed _donor, uint256 _amount, uint256 _totalBalance);
    event DonationSent(address indexed _project, uint256 _amount, uint256 _totalBalance);
    
    // Modifier to ensure only a valid donor can make a donation
    modifier validDonor() {
        require(msg.value > 0, "Donation amount must be greater than zero");
        _;
    }

    constructor() {
        totalBalance = 0;
    }

    // Function to get the total Balance
    function getTotalBalance() public view returns(uint256) {
        return totalBalance;
    }

    // Function to receive donations from donors
    function donate() external payable validDonor {
        // Update the donor's balance
        donorBalances[msg.sender] += msg.value;
        totalBalance += msg.value;

        // Emit an event for the donation
        emit DonationReceived(msg.sender, msg.value, totalBalance);
    }

    // Function to transfer funds to a project
    function sendDonationToProject(address payable _project, uint256 _amount) external {
        require(totalBalance > 0 && _amount < totalBalance, "There are no enough funds to donate");
        require(_project != address(0), "Invalid project address");

        // Transfer funds to the project
        (bool success, ) = _project.call{value: _amount}("");
        require(success, "Transfer failed");

        // Reduce total balance
        totalBalance -= _amount;

        // Update project balance
        projectBalances[_project] += _amount;

        // Emit an event for the donation sent
        emit DonationSent(_project, _amount, totalBalance);
    }

    // Function to check the balance of a donor
    function checkDonorBalance() external view returns (uint256) {
        return donorBalances[msg.sender];
    }

    // Function to check the balance of a project
    function checkProjectBalance(address _project) external view returns (uint256) {
        return projectBalances[_project];
    }
}
