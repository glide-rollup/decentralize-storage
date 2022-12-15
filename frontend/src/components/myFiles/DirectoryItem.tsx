import {Directory} from "../../types";
import {AiOutlineStar, GoFileDirectory, MdDeleteOutline, MdModeEdit} from "react-icons/all";
import {secondsToDate} from "../../utils/format";
import ItemRemove from "./ItemRemove";
import {useState} from "react";

const DirectoryItem = ({dir, openDirectory, reloadList}: { dir: Directory, openDirectory: Function, reloadList: Function }) => {
  const [isRemoval, setIsRemoval] = useState(false);

  return (
    <div onDoubleClick={() => openDirectory()}
         className={`flex text-gray-600 cursor-default flex-row justify-between border-b py-2.5 
        text-sm px-4 gap-2 hover:bg-gray-50 ${isRemoval && "opacity-50"}`}>
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
        <ItemRemove
          idList={[dir.id]}
          itemType={"directory"}
          handleStartRemove={(status: boolean) => setIsRemoval(status)}
          handleSuccess={() => reloadList()}
        />
      </div>
    </div>
  );
};

export default DirectoryItem;