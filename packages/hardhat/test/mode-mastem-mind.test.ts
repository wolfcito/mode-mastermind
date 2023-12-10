import { expect } from "chai";
import { ethers } from "hardhat";
import { Signer } from "ethers";
import { ModeMasterMind, ModeMasterMind__factory } from "../typechain-types";

describe("ModeMasterMind", function () {
  let owner: Signer, addr1: Signer, addr2: Signer;
  let modeMasterMind: ModeMasterMind;

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();

    const ModeMasterMindFactory: ModeMasterMind__factory = (await ethers.getContractFactory(
      "ModeMasterMind",
    )) as ModeMasterMind__factory;

    modeMasterMind = await ModeMasterMindFactory.deploy();
    await modeMasterMind.deploymentTransaction();
  });

  it("should deploy with the correct name and symbol", async function () {
    expect(await modeMasterMind.name()).to.equal("ModeMasterMind");
    expect(await modeMasterMind.symbol()).to.equal("MMM");
  });

  it("should mint and retrieve Badge", async function () {
    await modeMasterMind.mintItem(addr1.getAddress(), "token-uri-1");
    await modeMasterMind.mintItem(addr2.getAddress(), "token-uri-2");

    expect(await modeMasterMind.ownerOf(1)).to.equal(await addr1.getAddress());
    expect(await modeMasterMind.ownerOf(2)).to.equal(await addr2.getAddress());
  });

  // it('should register the contract and get a tokenId', async function () {
  //   const tokenId = await modeMasterMind.registerThis(addr1.getAddress())
  //   expect(tokenId).to.be.a('boolean')
  // })

  // it('should receive and withdraw donations', async function () {
  //   await expect(modeMasterMind.donate({ value: 100 }))
  //     .to.emit(modeMasterMind, 'DonationReceived')
  //     .withArgs(await owner.getAddress(), 100)

  //   const initialBalance = await ethers.provider.getBalance(
  //     await owner.getAddress()
  //   )
  //   await modeMasterMind.withdraw()
  //   const finalBalance = await ethers.provider.getBalance(
  //     await owner.getAddress()
  //   )

  //   expect(finalBalance).to.be.above(initialBalance)
  // })
});
