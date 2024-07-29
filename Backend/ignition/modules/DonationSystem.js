const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("DonationSystemModule", (m) => {
  const donation = m.contract("DonationSystem", []);

  return { donation };
});
