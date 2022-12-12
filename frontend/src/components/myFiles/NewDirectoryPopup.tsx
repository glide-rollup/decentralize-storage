import {useState} from "react";
import {Button, Dialog, DialogHeader, DialogBody, DialogFooter, Input} from "@material-tailwind/react";

const NewDirectoryPopup = () => {
  const [directoryTitle, setDirectoryTitle] = useState("");
  const [popupVisible, setPopupVisible] = useState(false);

  const handleOpen = () => setPopupVisible(!popupVisible);

  const handleCreate = () => {

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
                   value={directoryTitle}
                   onChange={e => setDirectoryTitle(e.target.value)}
            />
          </div>
        </DialogBody>

        <DialogFooter className={"px-6"}>
          <Button variant="text" onClick={handleOpen} className="mr-2">
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" onClick={handleCreate}>
            <span>Create</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default NewDirectoryPopup;