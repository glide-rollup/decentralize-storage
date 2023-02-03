import { useEffect, useState } from "react";
import DirectoryItem from "../../components/myFiles/DirectoryItem";
import { useAccount, useContractRead } from "wagmi";
import { mainContract } from "../../utils/contracts";
import { transformDir, transformFile } from "../../utils/transform";
import { DirectoryInput, Directory, FileInput, File } from "../../types";
import FileItem from "../../components/myFiles/FileItem";
import { Loader } from "../../ui/Loader";
import { useNavigate } from "react-router-dom";

export default function Favorite() {
  const navigate = useNavigate();
  const {address} = useAccount();
  const [isLoading, setIsLoading] = useState(true);

  const {data: filesList, refetch: refetchFilesList, status: listFilesStatus} = useContractRead({
    ...mainContract,
    functionName: "getFavoriteFiles",
    args: [address],
    // @ts-ignore
    select: (data: FileInput[]): File[] => data.map(file => transformFile(file))
  });

  const {data: dirsList, refetch: refetchDirsList, status: listDirsStatus} = useContractRead({
    ...mainContract,
    functionName: "getFavoriteDirs",
    args: [address],
    // @ts-ignore
    select: (data: DirectoryInput[]): Directory[] => data.map(dir => transformDir(dir))
  });

  useEffect(() => {
    if (listFilesStatus === 'success' && listDirsStatus === 'success') {
      setIsLoading(false);
    }
  }, [listFilesStatus, listDirsStatus]);

  const openDirectory = (dirId: number) => {
    setIsLoading(true);
    if (dirId) {
      navigate(`/my/${dirId}`);
    } else {
      navigate(`/my`);
    }
  }

  if (isLoading) {
    return (
      <div className={"text-center mt-8"}>
        <Loader size={"lg"} />
      </div>
    );
  }

  return (
    <>
      <div
        className={"flex text-gray-800 flex-row justify-between border-b py-4 pb-2 font-semibold text-sm px-4 gap-2"}>
        <div className={"w-10"}></div>
        <div className={"flex-1"}>Name</div>
        <div className={"w-32"}>Size</div>
        <div className={"w-20"}>Version</div>
        <div className={"w-20"}>Date</div>
        <div className={"w-32 text-right"}>Actions</div>
      </div>

      {((dirsList && dirsList?.length > 0) || filesList && filesList?.length > 0) ? (
        <>
          {(dirsList && dirsList.length > 0) && (
            <>
              {dirsList.map(dir => (
                <DirectoryItem
                  key={`d-${dir.id}`}
                  openDirectory={() => openDirectory(dir.id)}
                  reloadList={() => refetchDirsList()}
                  dir={dir}
                />
              ))}
            </>
          )}

          {(filesList && filesList.length > 0) && (
            <>
              {filesList.map(file => (
                <FileItem
                  key={`f-${file.id}`}
                  file={file}
                  reloadList={() => refetchFilesList()}
                />
              ))}
            </>
          )}
        </>
      ) : (
        <p className={"text-center pt-6 text-gray-500"}>
          *No favorites
        </p>
      )}
    </>
  )
}
