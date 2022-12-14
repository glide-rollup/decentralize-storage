import {useEffect, useState} from "react";
import DirectoryItem from "../../components/myFiles/DirectoryItem";
import {Breadcrumbs, Button} from "@material-tailwind/react";
import NewDirectoryPopup from "../../components/myFiles/NewDirectoryPopup";
import {useAccount, useContractRead} from "wagmi";
import {mainContract} from "../../utils/contracts";
import {transformDir, transformFile} from "../../utils/transform";
import {DirectoryInput, Directory, FileInput, File} from "../../types";
import UploadFilesPopup from "../../components/myFiles/UploadFilesPopup";
import FileItem from "../../components/myFiles/FileItem";
import {Loader} from "../../components/Loader";
import {BreadcrumbItem} from "../../assets/css/common.style";

export default function FilesList() {
  const {address} = useAccount();
  const [isLoading, setIsLoading] = useState(true);
  const [currentDirectoryId, setCurrentDirectoryId] = useState(0);

  const {data: directory} = useContractRead({
    ...mainContract,
    functionName: "dirs",
    args: [currentDirectoryId],
    select: (data: DirectoryInput): Directory => transformDir(data)
  });

  const {data: filesList, refetch: refetchFilesList} = useContractRead({
    ...mainContract,
    functionName: "getDirFiles",
    args: [currentDirectoryId, address],
    select: (data: FileInput[]): File[] => data.map(file => transformFile(file))
  });

  const {data: subDirectories, refetch: refetchSubDirs} = useContractRead({
    ...mainContract,
    functionName: "getDirSubDirs",
    args: [currentDirectoryId, address],
    select: (data: DirectoryInput[]): Directory[] => data.map(dir => transformDir(dir))
  });

  useEffect(() => {
    setIsLoading(false);
  }, [directory]);

  useEffect(() => {
    if (currentDirectoryId) {
      setIsLoading(true);
    }
  }, [currentDirectoryId]);

  if (isLoading) {
    return (
      <div className={"text-center mt-8"}>
        <Loader size={"lg"}/>
      </div>
    );
  }

  return (
    <>
      <div className={"flex flex-row justify-between mb-3"}>
        {directory && directory.id > 0 ? (
          <Breadcrumbs className={"mt-1.5 text-gray-600 font-medium"}>
            <BreadcrumbItem onClick={() => setCurrentDirectoryId(0)}>My Files</BreadcrumbItem>
            {directory?.id && (
              <BreadcrumbItem className={`opacity-60 pointer-events-none`}>
                {directory.name}
              </BreadcrumbItem>
            )}
          </Breadcrumbs>
        ) : (
          <p className={`mt-1.5 flex text-gray-600 flex-wrap items-center bg-blue-gray-50 bg-opacity-60 py-2 px-4 rounded-md`}>
            <BreadcrumbItem>My Files</BreadcrumbItem>
          </p>
        )}

        <div className={"flex gap-3"}>
          <NewDirectoryPopup handleSuccess={() => refetchSubDirs()}
                             directoryId={currentDirectoryId}
          />
          <UploadFilesPopup handleSuccess={() => refetchFilesList()}
                            directoryId={currentDirectoryId}
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

      {(subDirectories && subDirectories?.length > 0) ? (
        <>
          {(subDirectories && subDirectories.length > 0) && (
            <>
              {subDirectories.map(dir => (
                <DirectoryItem key={`d-${dir.id}`}
                               openDirectory={() => setCurrentDirectoryId(dir.id)}
                               dir={dir}
                />
              ))}
            </>
          )}
          {(filesList && filesList.length > 0) && (
            <>
              {filesList.map(file => (
                <FileItem key={`f-${file.id}`}
                          file={file}
                />
              ))}
            </>
          )}
        </>
      ) : (
        <p className={"text-center pt-6 text-gray-500"}>
          {currentDirectoryId !== 0 ? "*No files in directory" : "*No files/directories"}
        </p>
      )}
    </>
  )
}
