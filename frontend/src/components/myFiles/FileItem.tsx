import {AiOutlineStar, MdDeleteOutline, MdModeEdit} from "react-icons/all";
import {formatBytes, secondsToDate} from "../../utils/format";
import {File} from '../../types';
import ReactMimeIcons from 'react-mime-icons';

const FileItem = ({file}: { file: File }) => {

  return (
    <div className={"flex flex-row justify-between border-b py-2.5 text-sm px-4 gap-2"}>
      <div className={"w-10"}>
        <AiOutlineStar size={20} color={"gray"}/>
      </div>
      <div className={"flex-1 font-medium flex pl-0.5"}>
        <ReactMimeIcons mimetype={file.mimeType} size={'1.05rem'}/>
        <span className={"ml-2"}>{file.name}</span>
      </div>
      <div className={"w-32"}>{formatBytes(file.size)}</div>
      <div className={"w-20"}>{file.version}</div>
      <div className={"w-20"}>{secondsToDate(file.updatedAt)}</div>
      <div className={"w-32 justify-end flex gap-3"}>
        <MdModeEdit size={20}/>
        <MdDeleteOutline size={22} color={"red"}/>
      </div>
    </div>
  );
};

export default FileItem;