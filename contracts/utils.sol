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

	function indexOf(uint[] memory self, uint value) internal pure returns (uint, bool) {
		for (uint i = 0; i < self.length; ++i) if (self[i] == value) return (i, true);
		return (0, false);
	}

	function indexOfStr(string[] memory self, string memory value) internal pure returns (uint, bool) {
		for (uint i = 0; i < self.length; ++i) if (stringCompare(self[i], value) == 0) return (i, true);
		return (0, false);
	}

	function stringCompare(string memory _a, string memory _b) internal pure returns (int) {
		bytes memory a = bytes(_a);
		bytes memory b = bytes(_b);
		uint minLength = a.length;
		if (b.length < minLength) minLength = b.length;
		for (uint i = 0; i < minLength; ++i)
			if (a[i] < b[i])
				return - 1;
			else if (a[i] > b[i])
				return 1;
		if (a.length < b.length)
			return - 1;
		else if (a.length > b.length)
			return 1;
		else
			return 0;
	}

	function removeUintItems(uint[] storage list, uint _id) internal {
		(uint _index, bool _exists) = Utils.indexOf(list, _id);
		if (_exists) {
			if (list.length > 1) {
				list[_index] = list[list.length - 1];
			}
			list.pop();
		}
	}

	function removeStrItems(string[] storage list, string memory _id) internal {
		(uint _index, bool _exists) = Utils.indexOfStr(list, _id);
		if (_exists) {
			if (list.length > 1) {
				list[_index] = list[list.length - 1];
			}
			list.pop();
		}
	}

	//	function randomNumber(uint _max, uint8 _shift) internal view returns (uint) {
	//		return uint(keccak256(abi.encodePacked(_shift, msg.sender, block.difficulty, block.timestamp, uint(1)))) % _max;
	//	}

}
