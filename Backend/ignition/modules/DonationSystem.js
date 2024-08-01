const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const ADDRESS = '0x5770146155afB39E7751c69eB0018AD6FC0e1B22';

module.exports = buildModule("DonationSystemModule", (m) => {
  const donation = m.contract("DonationSystem", [ADDRESS]);

  return { donation };
});
