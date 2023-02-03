import { BigNumber } from "ethers";
import { Hash } from "@wagmi/core";

export interface IState {
  transactions: {
    list: TransactionType[]
  };
}

export type TransactionType = {
  hash: Hash,
  description: string
};

export type UploadFile = {
  name: string,
  ipfsHash: string,
  mimeType: string,
  size: number
}

export type DirectoryInput = {
  id: BigNumber,
  parentDir: BigNumber,
  isFavorite: boolean,
  updatedAt: BigNumber,
  name: string,
  owner: string,
  color: number
}

export type Directory = {
  id: number,
  parentDir: number,
  isFavorite: boolean,
  updatedAt: number,
  name: string,
  owner: string,
  color: number
}

export type FileInput = {
  id: string,
  parentDir: BigNumber,
  version: BigNumber,
  updatedAt: BigNumber,
  size: BigNumber,
  isFavorite: boolean,
  owner: string,
  name: string,
  mimeType: string,
  ipfsHash: string,
  shareHash: string,
  versionHistory: string[]
}

export type File = {
  id: string,
  parentDir: number,
  version: number,
  updatedAt: number,
  size: number,
  isFavorite: boolean,
  owner: string,
  name: string,
  mimeType: string,
  ipfsHash: string,
  shareHash: string,
  versionHistory: string[]
}