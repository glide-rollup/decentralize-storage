// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

import "@openzeppelin/contracts/utils/Strings.sol";
import "./utils.sol";

contract vStoreContract is Utils {
	uint totalDirs;

	mapping(uint => Directory) private dirs;
	mapping(string => File) private files;
	mapping(address => mapping(uint => uint[])) private userDirs; // [address][dir][subDir]
	mapping(address => mapping(uint => string[])) private userFiles; // [address][dir][files]
	mapping(address => string[]) private userFavoriteFiles;
	mapping(address => uint[]) private userFavoriteDirs;

	struct Directory {
		string id;
		uint parentDir;
		bool isFavorite;
		string name;
		address owner;
		DirectoryColor color;
	}

	struct File {
		string id; // account + parentDirId + name
		uint parentDir;
		uint version;
		uint updatedAt;
		bool isFavorite;
		FileType fileType;
		address owner;
		string name;
		string ipfsHash;
		string shareHash;
		string[] versionHistory;
	}

	struct FileUpload {
		string name;
		string ipfsHash;
	}

	function uploadFiles(uint _dirId, FileUpload[] memory _files) public {
		// Validate sub-directories
		if (_dirId > 0) {
			Directory memory _internalDir = dirs[_dirId];
			require(bytes(_internalDir.name).length > 0, "No such directory");
			require(msg.sender == _internalDir.owner, "No Access");
		}

		string[] memory _dirFiles = userFiles[msg.sender][_dirId];

		for (uint _i = 0; _i < _files.length; ++_i) {
			string memory _uploadedFileId = string.concat(string(msg.sender), _dirId, _files[_i].name);
			File storage file = files[_uploadedFileId];

			if (file.id == _uploadedFileId) {
				// exists
				require(file.owner == msg.sender, "No Access");
				file.version += 1;
				file.versionHistory.push(file.ipfsHash);
				file.ipfsHash = _files[_i].ipfsHash;
				file.updatedAt = block.timestamp;
			} else {
				// upload new



//				string id; // account + parentDirId + name
//				uint parentDir;
//				uint version;
//				uint updatedAt;
//				bool isFavorite;
//				FileType fileType;
//				address owner;
//				string name;
//				string ipfsHash;
//				string shareHash;
//				string[] versionHistory;


				files[_uploadedFileId] = File(
					_uploadedFileId,
						_dirId,

				);
			}

		}
	}

	function removeFiles(uint[] _id) public {

	}

	function createDirectory(uint _parentDir, string memory _name) public {

	}

	function updateDirectory(uint _id, uint _parentDir, string memory _name, DirectoryColor memory _color) public {

	}

	function removeDirectory(uint _id) public {

	}

}