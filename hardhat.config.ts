import '@nomiclabs/hardhat-etherscan';
import '@nomiclabs/hardhat-waffle';
import 'hardhat-abi-exporter';
import 'hardhat-deploy';
import 'hardhat-deploy-ethers';
import 'hardhat-gas-reporter';
import 'solidity-coverage';
import 'hardhat-dependency-compiler'

import { HardhatUserConfig } from 'hardhat/config';

import networks from './hardhat.network';

const config: HardhatUserConfig = {
  abiExporter: {
    path: './abis',
    clear: true,
    flat: true,
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  gasReporter: {
    currency: 'USD',
    gasPrice: 100,
    enabled: process.env.REPORT_GAS ? true : false,
    coinmarketcap: process.env.COINMARKETCAP_API_KEY,
    maxMethodDiff: 10,
  },
  mocha: {
    timeout: 30000,
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
    owner:{
      // PT Operations Gnosis Safe
      default: "0x029Aa20Dcc15c022b1b61D420aaCf7f179A9C73f",
      // PT Rinkeby Gnosis Safe
      4: "0x72c9aA4c753fc36cbF3d1fF6fEc0bC44ad41D7f2"
    }
  },
  networks,
  solidity: {
    compilers:[
      {
        version: "0.8.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          },
          evmVersion: "istanbul"
        }
      },
      {
        version: "0.7.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          },
          evmVersion: "istanbul"
        }
      },
      {
        version: "0.6.12",
        settings:{
          optimizer: {
            enabled: true,
            runs: 200
          },
          evmVersion:"istanbul"
        }
      }
    ]

  },
  dependencyCompiler: {
    paths: [
      '@pooltogether/pooltogether-generic-registry/contracts/AddressRegistry.sol',
    ],
  }
};

export default config;
