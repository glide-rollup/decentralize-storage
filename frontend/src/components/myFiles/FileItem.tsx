import {
  AiOutlineStar,
  HiOutlineDownload,
  MdDeleteOutline,
  MdModeEdit
} from "react-icons/all";
import {formatBytes, secondsToDate} from "../../utils/format";
import {File} from '../../types';
import VirsionListPopup from "./VirsionListPopup";

// @ts-ignore
import ReactMimeIcons from 'react-mime-icons';


const FileItem = ({file}: { file: File }) => {

  const getDownloadURL = () => {
    return `https://ipfs.io/ipfs/${file.ipfsHash}`;
  }

  return (
    <div className={`flex text-gray-600 flex-row cursor-default justify-between border-b py-2.5 text-sm px-4 gap-2 hover:bg-gray-50`}>
      <div className={"w-10"}>
        <AiOutlineStar size={20} color={"gray"}/>
        {/*<AiOutlineStar size={20} color={"orange"}/>*/}
      </div>
      <div className={"flex-1 font-medium flex pl-0.5"}>
        <ReactMimeIcons mimetype={file.mimeType} size={'1.05rem'}/>
        <span className={"ml-2 text-gray-800 font-medium"}>{file.name}</span>
      </div>
      <div className={"w-32"}>{formatBytes(file.size)}</div>
      <div className={"w-20 flex"}>
        <VirsionListPopup file={file}/>
      </div>
      <div className={"w-20"}>{secondsToDate(file.updatedAt)}</div>
      <div className={"w-32 justify-end flex gap-3"}>
        <a href={getDownloadURL()} download={file.name} target={'_blank'}>
          <HiOutlineDownload
            size={20}
            title={"Download"}
            className={"cursor-pointer opacity-70 transition hover:opacity-100"}
          />
        </a>
        <MdModeEdit
          size={20}
          title={"Edit"}
          className={"cursor-pointer opacity-70 transition hover:opacity-100"}
          onClick={() => alert('Coming soon...')}
        />
        <MdDeleteOutline
          size={22}
          title={"Remove"}
          className={"cursor-pointer opacity-70 transition hover:opacity-100"}
          color={"red"}
          onClick={() => alert('Coming soon...')}
        />
      </div>
    </div>
  );
};

export default FileItem;