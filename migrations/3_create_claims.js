const CertifactionContract = artifacts.require('./ClaimLog.sol')

module.exports = async function(deployer) {
  const certifaction = await CertifactionContract.deployed()

  console.log('Smart contract address:', certifaction.address)

  let accounts = await web3.eth.getAccounts()
  const fileHashes = new Array(web3.utils.asciiToHex("random"))
  const claimHashes = new Array(web3.utils.asciiToHex("random"))

  await certifaction.registerClaim(fileHashes, claimHashes, {
    from: accounts[0],
  })
}
