import {AiFillStar, AiOutlineStar, MdDeleteOutline} from "react-icons/all";
import {useContractWrite, usePrepareContractWrite, useWaitForTransaction} from "wagmi";
import {mainContract} from "../../utils/contracts";
import {addTransaction} from "../../store/transactionSlice";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";

const ItemFavorite = ({itemType, itemId, isFavorite, toggleFavorite}: {
  itemType: "file" | "directory",
  itemId: number | string,
  isFavorite: boolean,
  toggleFavorite: Function
}) => {
  const dispatch = useDispatch();

  // const {config: configRemove} = usePrepareContractWrite({
  //   ...mainContract,
  //   functionName: itemType === 'file' ? 'removeFiles' : 'removeDirs',
  //   enabled: removeList.length > 0,
  //   args: [removeList]
  // });
  //
  // const {data: dataRemove, write: writeRemove, status: removeStatus} = useContractWrite({
  //   ...configRemove,
  //   onSuccess: ({hash}) => {
  //     setRemoveList([]);
  //     dispatch(addTransaction({
  //       hash: hash,
  //       description: `Remove ${itemType}${idList.length > 1 ? "s" : ""}`
  //     }));
  //   },
  //   onError: ({message}) => {
  //     setRemoveList([]);
  //     handleStartRemove(false);
  //     console.log(`Error`, message);
  //   },
  // });
  //
  // useWaitForTransaction({
  //   hash: dataRemove?.hash,
  //   onError: error => {
  //     console.log('Is Err', error);
  //     setRemoveList([]);
  //   },
  //   onSuccess: () => {
  //     handleSuccess?.();
  //     setRemoveList([]);
  //   },
  // });
  //
  // useEffect(() => {
  //   if (writeRemove && removeStatus !== 'loading') {
  //     writeRemove();
  //     handleStartRemove(true);
  //   }
  // }, [writeRemove]);
  //
  //
  const handleToggleFavorite = () => {
    alert('Coming soon...');
    //   setRemoveList(idList);
  }

  return (
    <>
      {isFavorite ? (
        <AiFillStar
          size={20}
          color={"orange"}
          className={"cursor-pointer opacity-70 transition hover:opacity-100"}
          onClick={() => handleToggleFavorite()}
        />
      ) : (
        <AiOutlineStar
          size={20}
          color={"gray"}
          className={"cursor-pointer opacity-70 transition hover:opacity-100"}
          onClick={() => handleToggleFavorite()}
        />
      )}
    </>
  );
};

export default ItemFavorite;