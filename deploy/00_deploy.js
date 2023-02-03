require("hardhat-deploy");
require("hardhat-deploy-ethers");

const fs = require("fs");
const ethers = require("ethers");
const fa = require("@glif/filecoin-address");
const util = require("util");
const { artifacts } = require("hardhat");
const request = util.promisify(require("request"));

const DEPLOYER_PRIVATE_KEY = network.config.accounts[0];

async function callRpc(method, params) {
  const options = {
    method: "POST",
    url: "https://api.hyperspace.node.glif.io/rpc/v1",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      jsonrpc: "2.0",
      method: method,
      params: params,
      id: 1,
    }),
  };
  const res = await request(options);
  return JSON.parse(res.body).result;
}

const deployer = new ethers.Wallet(DEPLOYER_PRIVATE_KEY);

module.exports = async ({ deployments }) => {
  const { deploy } = deployments;

  const priorityFee = await callRpc("eth_maxPriorityFeePerGas");
  const f4Address = fa.newDelegatedEthAddress(deployer.address).toString();
  // const nonce = await callRpc("Filecoin.MpoolGetNonce", [f4Address]);

  console.log("Wallet Ethereum Address:", deployer.address);
  console.log("Wallet f4Address: ", f4Address)

  const contractName = "vStorageContract";
  const contract = await deploy(contractName, {
    from: deployer.address,
    args: [],
    maxPriorityFeePerGas: priorityFee,
    log: true,
  });

  console.log(`Deployed to `, contract.address);

  // Copy frontend files
  const contractsDir = `${__dirname}/../frontend/contractsData/`;
  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  const contractArtifact = artifacts.readArtifactSync(contractName);
  fs.writeFileSync(
    contractsDir + `/${contractName}.json`,
    JSON.stringify(contractArtifact, null, 2)
  );

  fs.writeFileSync(
    contractsDir + `/${contractName}-address.json`,
    JSON.stringify({ address: contract.address }, undefined, 2)
  );

  console.log(`Frontend files saved`);
};

module.exports.tags = ["vStorageContract"];