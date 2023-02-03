import { MdDeleteOutline } from "react-icons/all";
import { useContractWrite, usePrepareContractWrite, useWaitForTransaction } from "wagmi";
import { mainContract } from "../../utils/contracts";
import { addTransaction } from "../../store/transactionSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

type Props = {
  itemType: "file"|"directory",
  idList: number[]|string[],
  handleStartRemove: Function,
  handleSuccess: Function
};

const ItemRemove = ({itemType, idList, handleStartRemove, handleSuccess}: Props) => {
  const dispatch = useDispatch();
  const [removeList, setRemoveList] = useState<number[]|string[]>([]);

  const {config: configRemove} = usePrepareContractWrite({
    ...mainContract,
    functionName: itemType === 'file' ? 'removeFiles' : 'removeDirs',
    enabled: removeList.length > 0,
    args: [removeList]
  });

  const {data: dataRemove, write: writeRemove, status: removeStatus} = useContractWrite({
    ...configRemove,
    onSuccess: ({hash}) => {
      setRemoveList([]);
      dispatch(addTransaction({
        hash: hash,
        description: `Remove ${itemType}${idList.length > 1 ? "s" : ""}`
      }));
    },
    onError: ({message}) => {
      setRemoveList([]);
      handleStartRemove(false);
      console.log(`Error`, message);
    },
  });

  useWaitForTransaction({
    hash: dataRemove?.hash,
    onError: error => {
      console.log('Is Err', error);
      setRemoveList([]);
    },
    onSuccess: () => {
      handleSuccess?.();
      setRemoveList([]);
    },
  });

  useEffect(() => {
    if (writeRemove && removeStatus === 'idle') {
      writeRemove();
      handleStartRemove(true);
    }
  }, [writeRemove]);


  const handleRemove = () => {
    if (confirm(`Please confirm ${itemType} removal`)) {
      setRemoveList(idList);
    }
  }

  return (
    <MdDeleteOutline
      size={22}
      title={"Remove"}
      className={"cursor-pointer opacity-70 transition hover:opacity-100"}
      color={"red"}
      onClick={() => handleRemove()}
    />
  );
};

export default ItemRemove;