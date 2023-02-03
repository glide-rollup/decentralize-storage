import { NFTStorage } from "nft.storage";

export const STORAGE_KEY = "vStorage:key";

export const uploadFiles = (filesList: File[]) => {
  const nft_storage_api_key = localStorage.getItem(STORAGE_KEY);
  const client = new NFTStorage({
    token: nft_storage_api_key || import.meta.env.VITE_NFT_STORAGE_TOKEN
  });

  return new Promise(async (resolve, reject) => {
    try {
      const result = await client.storeDirectory(filesList);
      resolve(result);
    } catch (e) {
      reject(e);
    }
  })
}

// export const removeFiles = (filesList: string[] | number[]) => {
//   let promiseList: Promise<void>[] = [];
//   filesList.map(fileHash => {
//     promiseList.push(new Promise(async () => {
//       await client.delete(fileHash.toString());
//     }));
//   })
//
//   return Promise.all(promiseList);
// }