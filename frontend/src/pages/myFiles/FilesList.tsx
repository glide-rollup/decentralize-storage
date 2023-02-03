import { useEffect, useState } from "react";
import DirectoryItem from "../../components/myFiles/DirectoryItem";
import NewDirectoryPopup from "../../components/myFiles/NewDirectoryPopup";
import { useAccount, useContractRead } from "wagmi";
import { mainContract } from "../../utils/contracts";
import { transformDir, transformFile } from "../../utils/transform";
import { DirectoryInput, Directory, FileInput, File } from "../../types";
import UploadFilesPopup from "../../components/myFiles/UploadFilesPopup";
import FileItem from "../../components/myFiles/FileItem";
import { Loader } from "../../ui/Loader";
import { useNavigate, useParams } from "react-router-dom";
import BreadcrumbsPath from "../../ui/Breadcrumbs";

export default function FilesList() {
  const navigate = useNavigate();
  const {address} = useAccount();
  const {currentDirectoryId} = useParams();
  const [isLoading, setIsLoading] = useState(true);


  const {data: directory} = useContractRead({
    ...mainContract,
    functionName: "dirs",
    args: [parseInt(currentDirectoryId || "0")],
    // @ts-ignore
    select: (data: DirectoryInput): Directory => transformDir(data)
  });

  const {data: filesList, refetch: refetchFilesList} = useContractRead({
    ...mainContract,
    functionName: "getDirFiles",
    args: [parseInt(currentDirectoryId || "0"), address],
    // @ts-ignore
    select: (data: FileInput[]): File[] => data.map(file => transformFile(file))
  });

  const {data: subDirectories, refetch: refetchSubDirs} = useContractRead({
    ...mainContract,
    functionName: "getDirSubDirs",
    args: [parseInt(currentDirectoryId || "0"), address],
    // @ts-ignore
    select: (data: DirectoryInput[]): Directory[] => data.map(dir => transformDir(dir))
  });

  useEffect(() => {
    setIsLoading(false);
  }, [directory]);

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
      <div className={"flex flex-row justify-between mb-3"}>
        <BreadcrumbsPath
          directory={directory}
          openDirectory={openDirectory}
        />

        <div className={"flex gap-3"}>
          <NewDirectoryPopup
            handleSuccess={() => refetchSubDirs()}
            directoryId={parseInt(currentDirectoryId || "0")}
          />
          <UploadFilesPopup
            handleSuccess={() => refetchFilesList()}
            directoryId={parseInt(currentDirectoryId || "0")}
          />
        </div>
      </div>

      <div
        className={"flex text-gray-800 flex-row justify-between border-b py-4 pb-2 font-semibold text-sm px-4 gap-2"}>
        <div className={"w-10"}></div>
        <div className={"flex-1"}>Name</div>
        <div className={"w-32"}>Size</div>
        <div className={"w-20"}>Version</div>
        <div className={"w-20"}>Date</div>
        <div className={"w-32 text-right"}>Actions</div>
      </div>

      {(subDirectories && subDirectories?.length > 0) || (filesList && filesList?.length > 0) ? (
        <>
          {(subDirectories && subDirectories.length > 0) && (
            <>
              {subDirectories.map(dir => (
                <DirectoryItem
                  key={`d-${dir.id}`}
                  openDirectory={() => openDirectory(dir.id)}
                  reloadList={() => refetchSubDirs()}
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
          {currentDirectoryId ? "*No files in directory" : "*No files/directories"}
        </p>
      )}
    </>
  )
}
