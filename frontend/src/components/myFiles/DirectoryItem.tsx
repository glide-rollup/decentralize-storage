import {Directory} from "../../types";
import {AiOutlineStar, GoFileDirectory, MdDeleteOutline, MdModeEdit} from "react-icons/all";
import {secondsToDate} from "../../utils/format";

const DirectoryItem = ({dir}: { dir: Directory }) => {
  return (
    <div className={"flex flex-row justify-between border-b py-2.5 text-sm px-4 gap-2"}>
      <div className={"w-10"}>
        <AiOutlineStar size={20} color={"gray"}/>
      </div>
      <div className={"flex-1 font-medium flex"}>
        <GoFileDirectory size={20}/>
        <span className={"ml-2"}>{dir.name}</span>
      </div>
      <div className={"w-32"}>&minus;</div>
      <div className={"w-20"}>&minus;</div>
      <div className={"w-20"}>{secondsToDate(dir.updatedAt)}</div>
      <div className={"w-32 justify-end flex gap-3"}>
        <MdModeEdit size={20}/>
        <MdDeleteOutline size={22} color={"red"}/>
      </div>
    </div>
  );
};

export default DirectoryItem;