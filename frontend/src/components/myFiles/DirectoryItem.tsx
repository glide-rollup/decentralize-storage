import {Directory} from "../../types";
import {AiOutlineStar, GoFileDirectory, MdDeleteOutline, MdModeEdit} from "react-icons/all";
import {secondsToDate} from "../../utils/format";

const DirectoryItem = ({dir, openDirectory}: { dir: Directory, openDirectory: Function }) => {

  return (
    <div onDoubleClick={() => openDirectory()}
         className={`flex text-gray-600 cursor-default flex-row justify-between border-b py-2.5 
      text-sm px-4 gap-2 hover:bg-gray-50`}>
      <div className={"w-10"}>
        <AiOutlineStar size={20} color={"gray"}/>
      </div>
      <div className={"flex-1 font-medium flex"}>
        <GoFileDirectory size={20}/>
        <span className={"ml-2 text-gray-800"}>{dir.name}</span>
      </div>
      <div className={"w-32"}>&minus;</div>
      <div className={"w-20"}>&minus;</div>
      <div className={"w-20"}>{secondsToDate(dir.updatedAt)}</div>
      <div className={"w-32 justify-end flex gap-3"}>
        <MdModeEdit
          size={20}
          className={"cursor-pointer opacity-80 hover:opacity-100"}
        />
        <MdDeleteOutline
          size={22}
          color={"red"}
          className={"cursor-pointer opacity-80 hover:opacity-100"}
        />
      </div>
    </div>
  );
};

export default DirectoryItem;