const { ethers, upgrades } = require("hardhat");

async function main () {
    const NFTCertificateIssuer = await ethers.getContractFactory("NFTCertificateIssuer");

    const deployedNFTCertificateIssuer = await upgrades.deployProxy(NFTCertificateIssuer,["NFT Certificate Issuer"], { initializer: "initialize" }, { kind: 'uups' }, { redeployImplementation: "always" });

    await deployedNFTCertificateIssuer.deployed();

    console.log(`Deployed Contract Address: ${deployedNFTCertificateIssuer.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });