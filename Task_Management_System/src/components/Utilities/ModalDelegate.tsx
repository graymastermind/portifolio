import React, { useState } from "react";
import { useAppSelector } from "../../store/hooks";
import Modal from "./Modal";

const ModalDelegate: React.FC<{
  onClose: () => void;
  delName?: string;
  onConfirm: (newDelName: string) => void;
  btnText: string;
  title: string;
}> = ({ onClose, delName, onConfirm, btnText, title }) => {
  const delegates = useAppSelector((store) => store.tasks.delegates);

  const [errorDelegateName, setErrorDelegateName] = useState<boolean>(false);
  const [newDelName, setnewDelName] = useState<string>(delName ? delName : "");

  const checkDelNameExists = (val: string) => {
    const delegateDoesNotExist = delegates.every(
      (delegate: string) => delegate !== val
    );

    if (delegateDoesNotExist || delName === val) {
      setErrorDelegateName(false);
    } else {
      setErrorDelegateName(true);
    }
  };

  const confirmDelNameHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    if (errorDelegateName) return;
    onConfirm(newDelName);
    onClose();
  };

  return (
    <Modal onClose={onClose} title={title}>
      <form className="stylesInputsField">
        <div className="relative">
          <label htmlFor="del-name" className="">
            Title
          </label>
          <input
            type="text"
            id="del-name"
            placeholder="Enter a delegate name"
            value={newDelName}
            onChange={({ target }) => setnewDelName(target.value)}
            className={`inputStyles block w-full`}
            onInput={({ currentTarget }) =>
              checkDelNameExists(currentTarget.value)
            }
          />
          {errorDelegateName && (
            <div className="absolute bg-rose-500 text-slate-200 rounded-md p-2 top-full text-sm w-full font-medium z-20">
              Delegate name already exists
            </div>
          )}
        </div>
        <button className="btn mt-6" onClick={confirmDelNameHandler}>
          {btnText}
        </button>
      </form>
    </Modal>
  );
};

export default ModalDelegate;
