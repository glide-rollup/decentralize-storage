import { AiFillStar, AiOutlineStar } from "react-icons/all";
import { useContractWrite, usePrepareContractWrite, useWaitForTransaction } from "wagmi";
import { mainContract } from "../../utils/contracts";
import { addTransaction } from "../../store/transactionSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

type Props = {
  itemType: "file"|"directory",
  itemId: number|string,
  isFavorite: boolean,
  toggleFavorite: Function
};

const ItemFavorite = ({itemType, itemId, isFavorite, toggleFavorite}: Props) => {
  const dispatch = useDispatch();
  const [removeItem, setRemoveItem] = useState<number|string|null>(null);
  const [addItem, setAddItem] = useState<number|string|null>(null);

  // Add to favorite

  const {config: configFavoriteAdd} = usePrepareContractWrite({
    ...mainContract,
    functionName: itemType === 'file' ? 'addFavoriteFile' : 'addFavoriteDir',
    enabled: addItem !== null,
    args: [itemId]
  });

  const {data: favoriteDataAdd, write: favoriteWriteAdd, status: favoriteStatusAdd} = useContractWrite({
    ...configFavoriteAdd,
    onSuccess: ({hash}) => {
      setAddItem(null);
      dispatch(addTransaction({
        hash: hash,
        description: `Add ${itemType} to favorites`
      }));
    },
    onError: ({message}) => {
      setAddItem(null);
      console.log(`Error`, message);
    },
  });

  useWaitForTransaction({
    hash: favoriteDataAdd?.hash,
    onError: error => {
      console.log('Is Err', error);
    },
    onSuccess: () => {
      toggleFavorite?.();
      console.log(`onSuccess`);
    },
  });

  useEffect(() => {
    if (favoriteWriteAdd && addItem !== null && favoriteStatusAdd !== 'loading') {
      favoriteWriteAdd();
    }
  }, [favoriteWriteAdd]);

  // Remove from favorite

  const {config: configFavoriteRemove} = usePrepareContractWrite({
    ...mainContract,
    functionName: itemType === 'file' ? 'removeFavoriteFile' : 'removeFavoriteDir',
    enabled: removeItem !== null,
    args: [itemId]
  });

  const {data: favoriteDataRemove, write: favoriteWriteRemove, status: favoriteStatusRemove} = useContractWrite({
    ...configFavoriteRemove,
    onSuccess: ({hash}) => {
      setRemoveItem(null);
      dispatch(addTransaction({
        hash: hash,
        description: `Remove ${itemType} from favorites`
      }));
    },
    onError: ({message}) => {
      setRemoveItem(null);
      console.log(`Error`, message);
    },
  });

  useWaitForTransaction({
    hash: favoriteDataRemove?.hash,
    onError: error => {
      console.log('Is Err', error);
    },
    onSuccess: () => {
      toggleFavorite?.();
      console.log(`onSuccess`);
    },
  });

  useEffect(() => {
    if (favoriteWriteRemove && removeItem !== null && favoriteStatusRemove !== 'loading') {
      favoriteWriteRemove();
    }
  }, [favoriteWriteRemove]);

  // Actions

  const handleToggleFavorite = () => {
    if (isFavorite) {
      setRemoveItem(itemId);
    } else {
      setAddItem(itemId);
    }
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