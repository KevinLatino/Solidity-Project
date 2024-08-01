async function main() {
    const [deployer] = await ethers.getSigners();

    console.log(
    "Deploying contracts with the account:",
    deployer.address
    );

    const DonationSystem = await ethers.getContractFactory("DonationSystem");
    const contract = await DonationSystem.deploy();

    console.log("Contract deployed at:", contract.address);

    const getTotalBalance = await contract.getTotalBalance();
    
    console.log("Total Balance:", getTotalBalance);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });