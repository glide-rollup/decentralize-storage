import { useEffect, useState } from "react";
import { Dropzone, FileItem } from "@dropzone-ui/react";
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter, Input } from "@material-tailwind/react";
import { mainContract } from '../../utils/contracts';
import { useContractWrite, usePrepareContractWrite, useWaitForTransaction } from "wagmi";
import { Loader } from "../../ui/Loader";
import { addTransaction } from "../../store/transactionSlice";
import { useDispatch } from "react-redux";
import { STORAGE_KEY, uploadFiles } from "../../utils/storage";
import { UploadFile } from "../../types";
import { FileValidated } from "@dropzone-ui/react/build/components/dropzone/components/utils/validation.utils";

type Props = {
  directoryId: number,
  handleSuccess: Function
};

const UploadFilesPopup = ({directoryId, handleSuccess}: Props) => {
  const dispatch = useDispatch();
  const [files, setFiles] = useState<FileValidated[]>([]);
  const [popupVisible, setPopupVisible] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [uploadedFiles, setUploadedFiles] = useState<UploadFile[]>([]);

  const handleOpen = () => setPopupVisible(!popupVisible);

  const appendFiles = (incomingFiles: FileValidated[]) => {
    setFiles(incomingFiles);
  };

  const {config: configUpload} = usePrepareContractWrite({
    ...mainContract,
    functionName: 'uploadFiles',
    enabled: uploadedFiles.length > 0,
    args: [directoryId, uploadedFiles]
  });

  const {data: dataUpload, write: writeUpload, status: uploadStatus} = useContractWrite({
    ...configUpload,
    onSuccess: ({hash}) => {
      setIsLoading(false);
      setPopupVisible(false);
      setFiles([]);
      dispatch(addTransaction({
        hash: hash,
        description: `Upload files`
      }));
    },
    onError: ({message}) => {
      setIsLoading(false);
      setUploadedFiles([]);
      console.log(`Error`, message);
    },
  });

  useWaitForTransaction({
    hash: dataUpload?.hash,
    onError: error => {
      console.log('Is Err', error);
      setUploadedFiles([]);
    },
    onSuccess: () => {
      handleSuccess?.();
      setUploadedFiles([]);
    },
  });

  useEffect(() => {
    // submit data if we receive json result URL
    if (writeUpload && uploadStatus === 'idle') {
      writeUpload();
    }
  }, [writeUpload]);

  // ------------ Actions ------------

  const handleUpload = () => {
    setIsLoading(true);

    const filesList = files.map((item: FileValidated) => item.file);
    uploadFiles(filesList).then(ipfsHash => {
      let resultFiles: UploadFile[] = [];
      files.map((item: FileValidated) => {
        resultFiles.push({
          name: item.file.name,
          ipfsHash: `${ipfsHash}/${item.file.name}`,
          size: item.file.size,
          mimeType: item.file.type
        })
      })

      setUploadedFiles(resultFiles);
    }).catch(e => {
      console.log(`Error`, e);
      let details = "";
      const myKey = localStorage.getItem(STORAGE_KEY);
      if (myKey) {
        details = ", please check your API Key";
      }
      alert(`Files uploading error${details}`)
    });
  }

  return (
    <>
      <Button variant="gradient" onClick={handleOpen}>Upload Files</Button>

      <Dialog open={popupVisible} handler={handleOpen} size={"lg"}>
        <DialogHeader className={"px-6 pb-0 text-xl"}>
          Upload Files
        </DialogHeader>

        <DialogBody>
          <div className={"w-full px-2"}>
            <Dropzone backgroundColor={"#F9F9F9"}
                      onChange={appendFiles}
                      footer={false}
                      headerClassName={"p-6 gap-1"}
                      value={files}>
              {files.length === 0 && (
                <span className={"opacity-50 text-xl"}>Drag&Drop or click to select a files</span>
              )}

              {files.map((file, index) => (
                <FileItem {...file} key={index} preview />
              ))}
            </Dropzone>
          </div>
        </DialogBody>

        <DialogFooter className={"px-6 pt-0"}>
          {isLoading ? (
            <Loader size={"md"} />
          ) : (
            <>
              <Button variant="text"
                      onClick={handleOpen}
                      className="mr-2">
                <span>Cancel</span>
              </Button>
              <Button variant="gradient"
                      disabled={files.length === 0}
                      onClick={handleUpload}>
                <span>Upload</span>
              </Button>
            </>
          )}
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default UploadFilesPopup;