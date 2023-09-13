import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { tasksActions } from "../../../store/Tasks.store";
import ItemDelegate from "./ItemDelegate";
import ModalDelegate from "../../Utilities/ModalDelegate";

const ContentDelegates: React.FC<{ classActive: string }> = ({
  classActive,
}) => {
  const delegates = useAppSelector((store) => store.tasks.delegates);
  const [modalDelShown, setModalDelShown] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const createNewDelegateHandler = (inputValue: string) => {
    const newDelegateName: string = inputValue.trim();

    if (newDelegateName.length === 0) return;

    const directoryDoesNotExist = delegates.every(
      (delegate: string) => delegate !== newDelegateName
    );

    if (directoryDoesNotExist) {
      dispatch(tasksActions.createDirectory(newDelegateName));
    }
  };

  const closeModalDelegateHandler = () => {
    setModalDelShown(false);
  };

  return (
    <>
      {modalDelShown && (
        <ModalDelegate
          onClose={closeModalDelegateHandler}
          onConfirm={createNewDelegateHandler}
          btnText="Create"
          title="Create new delegate"
        />
      )}

      <ul className="max-h-36 overflow-auto">
        {delegates.map((delegate: string) => (
          <ItemDelegate key={delegate} classActive={classActive} dir={delegate} />
        ))}
      </ul>
      <button
        onClick={() => setModalDelShown(true)}
        className="px-3 py-1 border-slate-300 dark:border-slate-700 border-2 ml-9 mt-2 rounded-md border-dashed hover:text-violet-500"
      >
        + New
      </button>
    </>
  );
};

export default ContentDelegates;
