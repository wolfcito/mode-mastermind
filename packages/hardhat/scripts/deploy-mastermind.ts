import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log(`Deploying contracts with the account: ${deployer.address}`);

  const ModeMasterMind = await ethers.getContractFactory("ModeMasterMind");
  const modeMasterMind = await ModeMasterMind.deploy();

  await modeMasterMind.waitForDeployment();

  console.log(`ModeMasterMind deployed to: ${modeMasterMind.target}`);
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
