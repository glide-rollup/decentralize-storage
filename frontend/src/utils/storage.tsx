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