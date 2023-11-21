require("@nomicfoundation/hardhat-toolbox");
require('@openzeppelin/hardhat-upgrades');
require("dotenv").config({ path: ".env" });

module.exports = {
  solidity: "0.8.20",
  networks: {
    goerli: {
      url: process.env.GOERLI_RPC,
      accounts: [process.env.PRIVATE_KEY],
    },

    sepolia: {
      url: process.env.SEPOLIA_RPC,
      accounts: [process.env.PRIVATE_KEY],
    },

    mainnet: {
      url: process.env.MAINNET_RPC,
      accounts: [process.env.PRIVATE_KEY],
    },

    polygonMumbai: {
      url: process.env.MUMBAI_RPC,
      accounts: [process.env.PRIVATE_KEY],
    },

    polygon: {
      url: process.env.POLYGON_RPC,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: {
      sepolia: process.env.ETHERSCAN_API_KEY,
      goerli: process.env.ETHERSCAN_API_KEY,
      mainnet: process.env.ETHERSCAN_API_KEY,
      polygonMumbai: process.env.POLYGONSCAN_API_KEY,
      polygon: process.env.POLYGONSCAN_API_KEY,
    }
  }
};
