// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

abstract contract Utils {
	address internal constant NULL_ADDRESS = 0x0000000000000000000000000000000000000000;

	enum DirectoryColor {
		Gray,
		Red,
		Green,
		Blue,
		Yellow,
		Orange,
		Pink,
		Brown
	}

	enum FileType {
		None,
		Image,
		Video,
		Audio,
		Document
	}

	function randomNumber(uint _max, uint8 _shift) internal view returns (uint) {
		return uint(keccak256(abi.encodePacked(_shift, msg.sender, block.difficulty, block.timestamp, uint(1)))) % _max;
	}

	function has(uint[] memory self, uint value) internal pure returns (bool) {
		uint length = self.length;
		for (uint i = 0; i < length; ++i) if (self[i] == value) return true;
		return false;
	}

	//	function indexOf(uint[] memory self, uint value) internal pure returns (uint, bool) {
	//		uint length = self.length;
	//		for (uint i = 0; i < length; ++i) if (self[i] == value) return (i, true);
	//		return (0, false);
	//	}

	//	function string_compare(string memory _a, string memory _b) private pure returns (int) {
	//		bytes memory a = bytes(_a);
	//		bytes memory b = bytes(_b);
	//		uint minLength = a.length;
	//		if (b.length < minLength) minLength = b.length;
	//		for (uint i = 0; i < minLength; ++i)
	//			if (a[i] < b[i])
	//				return - 1;
	//			else if (a[i] > b[i])
	//				return 1;
	//		if (a.length < b.length)
	//			return - 1;
	//		else if (a.length > b.length)
	//			return 1;
	//		else
	//			return 0;
	//	}
	//
	//	function string_equal(string memory _a, string memory _b) internal pure returns (bool) {
	//		return string_compare(_a, _b) == 0;
	//	}

}
