import {NFTStorage} from "nft.storage";

const client = new NFTStorage({
  token: import.meta.env.VITE_NFT_STORAGE_TOKEN
});

export const uploadFiles = (filesList: File[]) => {
  return new Promise(async (resolve) => {
    const result = await client.storeDirectory(filesList);
    resolve(result);
  })
}