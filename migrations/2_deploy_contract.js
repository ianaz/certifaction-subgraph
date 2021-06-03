const CertifactionContract = artifacts.require('./ClaimLog.sol')

module.exports = async function(deployer) {
  await deployer.deploy(CertifactionContract)
}
