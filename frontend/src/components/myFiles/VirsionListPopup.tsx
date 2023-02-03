import { useState } from "react";
import { Dialog, DialogHeader, DialogBody, Button, DialogFooter } from "@material-tailwind/react";
import { IoListCircleOutline } from "react-icons/all";
import { File } from "../../types";

type Props = {
  file: File
};

const VirsionListPopup = ({file}: Props) => {
  const [popupVisible, setPopupVisible] = useState<boolean>(false);

  const handleOpen = () => setPopupVisible(!popupVisible);

  const OneVersion = ({ipfsHash, version}: {ipfsHash: string, version: number}) => (
    <div className={"flex gap-4 border-b py-2"}>
      <span>#{version}</span>
      <a href={`https://ipfs.io/ipfs/${ipfsHash}`}
         target={"_blank"}
         download={file.name}
         className={`text-indigo-500 hover:text-indigo-400 outline-0`}>
        ipfs://{ipfsHash}
      </a>
    </div>
  )

  return (
    <>
      <span className={"pt-0.5"}>{file.version}</span>
      {file.version > 1 && (
        <IoListCircleOutline
          size={22}
          onClick={() => setPopupVisible(true)}
          title={"View version list"}
          className={"ml-1.5 cursor-pointer opacity-70 transition hover:opacity-100"}
        />
      )}

      <Dialog open={popupVisible} handler={handleOpen} size={"lg"}>
        <DialogHeader className={"px-6 pb-0 text-xl"}>
          File versions History
        </DialogHeader>

        <DialogBody>
          <div className={"w-full px-2 pt-2 pb-2 font-medium"}>
            {file.versionHistory.map((hash, index) => (
              <OneVersion
                key={index}
                version={index + 1}
                ipfsHash={hash}
              />
            ))}
            <OneVersion
              key={file.version}
              version={file.version}
              ipfsHash={file.ipfsHash}
            />
          </div>
        </DialogBody>
        <DialogFooter className={"px-6 pt-0"}>
          <Button variant="text"
                  onClick={handleOpen}
                  className="mr-2">
            <span>Close</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default VirsionListPopup;