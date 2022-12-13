import {useEffect, useState} from "react";
import {Button, Dialog, DialogHeader, DialogBody, DialogFooter, Input} from "@material-tailwind/react";
import {mainContract} from '../../utils/contracts';
import {useContractWrite, usePrepareContractWrite, useWaitForTransaction} from "wagmi";
import {Loader} from "../Loader";

const NewDirectoryPopup = ({handleSuccess}) => {
  const [directoryTitle, setDirectoryTitle] = useState("");
  const [popupVisible, setPopupVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleOpen = () => setPopupVisible(!popupVisible);

  const {config: configCall, error: errorCall} = usePrepareContractWrite({
    ...mainContract,
    functionName: 'createDirectory',
    enabled: directoryTitle.length > 0,
    args: [0, directoryTitle]
  });

  const {data: dataCall, write: writeCall} = useContractWrite({
    ...configCall,
    onSuccess: ({hash}) => {
      console.log(`hash`, hash);
      // dispatch(addTransaction({
      //   hash: hash,
      //   description: `Create Community "${addFormData.name}"`
      // }));
    },
    onError: ({message}) => {
      setIsLoading(false);
      console.log(`Error`, message);
    },
  });

  useWaitForTransaction({
    hash: dataCall?.hash,
    onError: error => {
      console.log('is err', error);
      setIsLoading(false);
    },
    onSuccess: data => {
      console.log(`DONE`);
      console.log(`data`, data);
      setIsLoading(false);
      setPopupVisible(false);
      handleSuccess?.();
    },
  });

  const handleCreate = () => {
    writeCall?.();
    setIsLoading(true);
  }

  const handleEnterKey = (event) => {
    if (event.key === 'Enter') {
      handleCreate();
    }
  }

  return (
    <>
      <Button variant="outlined" onClick={handleOpen}>
        New Directory
      </Button>

      <Dialog open={popupVisible} handler={handleOpen} size={"xs"}>
        <DialogHeader className={"px-6 text-xl"}>New Directory</DialogHeader>

        <DialogBody>
          <div className={"w-full px-2"}>
            <Input label="Directory title"
                   maxLength={160}
                   required={true}
                   value={directoryTitle}
                   onChange={event => setDirectoryTitle(event.target.value)}
                   onKeyDown={handleEnterKey}
            />
          </div>
        </DialogBody>

        <DialogFooter className={"px-6"}>
          {isLoading ? (
            <Loader size={"md"}/>
          ) : (
            <>
              <Button variant="text"
                      onClick={handleOpen}
                      className="mr-2">
                <span>Cancel</span>
              </Button>
              <Button variant="gradient"
                      disabled={!writeCall}
                      onClick={handleCreate}>
                <span>Create</span>
              </Button>
            </>
          )}
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default NewDirectoryPopup;