// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

import "@openzeppelin/contracts/utils/Strings.sol";
import "./utils.sol";

contract vStoreContract is Utils {
	uint private totalDirs;

	mapping(uint => Directory) private dirs;
	mapping(string => File) private files;
	mapping(address => mapping(uint => uint[])) private userDirs; // [address][dir][subDir]
	mapping(address => mapping(uint => string[])) private userFiles; // [address][dir][files]
	mapping(address => string[]) private userFavoriteFiles;
	mapping(address => uint[]) private userFavoriteDirs;

	struct Directory {
		uint id;
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

	// Upload files
	function uploadFiles(uint _dirId, FileUpload[] memory _files) public {
		string memory _owner = Strings.toHexString(uint256(uint160(msg.sender)), 20);

		// Validate sub-directories
		if (_dirId > 0) {
			Directory memory _internalDir = dirs[_dirId];
			require(bytes(_internalDir.name).length > 0, "No such directory");
			require(msg.sender == _internalDir.owner, "No Access");
		}

		for (uint _i = 0; _i < _files.length; ++_i) {
			string memory _uploadedFileId = string.concat(_owner, Strings.toString(_dirId), _files[_i].name);
			File storage file = files[_uploadedFileId];

			if (bytes(file.id).length > 0) {
				// exists (set new version)
				require(file.owner == msg.sender, "No Access");
				file.version += 1;
				file.versionHistory.push(file.ipfsHash);
				file.ipfsHash = _files[_i].ipfsHash;
				file.updatedAt = block.timestamp;
			} else {
				//not exists (upload new file)
				files[_uploadedFileId] = File(
					_uploadedFileId,
					_dirId,
					1,
					block.timestamp,
					false,
					msg.sender,
					_files[_i].name,
					_files[_i].ipfsHash,
					"",
					new string[](0)
				);
				userFiles[msg.sender][_dirId].push(_uploadedFileId);
			}
		}
	}

	// Remove files list by Id
	function removeFiles(string[] memory _idList) public {
		for (uint _i = 0; _i < _idList.length; ++_i) {
			File storage file = files[_idList[_i]];
			require(file.owner == msg.sender, "No Access");

			// remove from directory
			Utils.removeStrItems(userFiles[msg.sender][file.parentDir], file.id);

			// remove from favorites
			if (file.isFavorite) {
				Utils.removeStrItems(userFavoriteFiles[msg.sender], file.id);
			}

			// remove file
			delete files[_idList[_i]];
		}
	}

	// Create new directory
	function createDirectory(uint _parentDir, string memory _name) public {
		totalDirs += 1;

		dirs[totalDirs] = Directory(
			totalDirs,
			_parentDir,
			false,
			_name,
			msg.sender,
			DirectoryColor.Gray
		);
		userDirs[msg.sender][_parentDir].push(totalDirs);
	}

	// Update directory
	function updateDirectory(uint _id, uint _parentDir, string memory _name, DirectoryColor _color) public {
		Directory storage directory = dirs[_id];
		require(directory.owner == msg.sender, "No Access");

		directory.parentDir = _parentDir;
		directory.name = _name;
		directory.color = _color;
	}

	// Remove directory
	function removeDirectory(uint _id) public {
		Directory storage directory = dirs[_id];
		require(_id > 0, "Wrong directory ID");
		require(directory.owner == msg.sender, "No Access");

		// remove from parentDirectory
		Utils.removeUintItems(userDirs[msg.sender][directory.parentDir], directory.id);

		// remove from favorites
		if (directory.isFavorite) {
			Utils.removeUintItems(userFavoriteDirs[msg.sender], directory.id);
		}

		// remove dir
		delete dirs[_id];
	}

}