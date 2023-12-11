// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract ModeMasterMind is ERC721, ERC721Enumerable, ERC721URIStorage, Ownable {
	using Counters for Counters.Counter;

	Counters.Counter public tokenIdCounter;

	mapping(address => uint256) public donorBalances;

	event DonationReceived(address indexed donor, uint256 amount);

	constructor() ERC721("ModeMasterMind", "MMM") {}

	function _baseURI() internal pure override returns (string memory) {
		return "https://ipfs.io/ipfs/";
	}

	function mintItem(address to, string memory uri) public returns (uint256) {
		tokenIdCounter.increment();
		uint256 tokenId = tokenIdCounter.current();
		_safeMint(to, tokenId);
		_setTokenURI(tokenId, uri);
		return tokenId;
	}

	// The following functions are overrides required by Solidity.

	function _beforeTokenTransfer(
		address from,
		address to,
		uint256 tokenId
	) internal override(ERC721, ERC721Enumerable) {
		super._beforeTokenTransfer(from, to, tokenId);
	}

	function _burn(
		uint256 tokenId
	) internal override(ERC721, ERC721URIStorage) {
		super._burn(tokenId);
	}

	function tokenURI(
		uint256 tokenId
	) public view override(ERC721, ERC721URIStorage) returns (string memory) {
		return super.tokenURI(tokenId);
	}

	function supportsInterface(
		bytes4 interfaceId
	) public view override(ERC721, ERC721Enumerable) returns (bool) {
		return super.supportsInterface(interfaceId);
	}

	/// @dev Registers this contract and assigns the NFT to the owner of this contract
	/// @param sfsContractAddress This address is the address of the SFS contract
	function registerThis(
		address sfsContractAddress
	) public onlyOwner returns (uint256 tokenId) {
		Register sfsContract = Register(sfsContractAddress);
		return sfsContract.register(owner());
	}

	// optional donation
	function donate() external payable {
		require(msg.value > 0, "Must be non-zero amount");
		donorBalances[msg.sender] += msg.value;
		emit DonationReceived(msg.sender, msg.value);
	}

	function withdraw() external onlyOwner {
		require(address(this).balance > 0, "there are no funds");
		payable(owner()).transfer(address(this).balance);
	}
}

contract Register {
	function register(address _recipient) public returns (uint256 tokenId) {}
}
