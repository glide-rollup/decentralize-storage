import React, { useState } from "react";
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter, Input } from "@material-tailwind/react";
import { mainContract } from '../../utils/contracts';
import { useContractWrite, usePrepareContractWrite, useWaitForTransaction } from "wagmi";
import { Loader } from "../../ui/Loader";
import { addTransaction } from "../../store/transactionSlice";
import { useDispatch } from "react-redux";

type Props = {
  directoryId: number,
  handleSuccess: Function
};

const NewDirectoryPopup = ({directoryId, handleSuccess}: Props) => {
  const dispatch = useDispatch();
  const [directoryTitle, setDirectoryTitle] = useState("");
  const [popupVisible, setPopupVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleOpen = () => setPopupVisible(!popupVisible);

  const {config: configCall} = usePrepareContractWrite({
    ...mainContract,
    functionName: 'createDir',
    enabled: directoryTitle.length > 0,
    args: [directoryId, directoryTitle]
  });

  const {data: dataCall, write: writeCall} = useContractWrite({
    ...configCall,
    onSuccess: ({hash}) => {
      setIsLoading(false);
      setDirectoryTitle("");
      setPopupVisible(false);
      dispatch(addTransaction({
        hash: hash,
        description: `Create new Directory`
      }));
    },
    onError: ({message}) => {
      setIsLoading(false);
      console.log(`Error`, message);
    },
  });

  useWaitForTransaction({
    hash: dataCall?.hash,
    onError: error => {
      console.log('Is Err', error);
    },
    onSuccess: () => {
      handleSuccess?.();
    },
  });

  const handleCreate = () => {
    writeCall?.();
    setIsLoading(true);
  }

  const handleEnterKey = (event: React.KeyboardEvent) => {
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
        <DialogHeader className={"px-6 pb-0 text-xl"}>
          New Directory
        </DialogHeader>

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