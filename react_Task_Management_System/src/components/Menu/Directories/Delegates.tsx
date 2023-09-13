import React, { useState } from "react";
import { ReactComponent as Arrow } from "../../../assets/arrow.svg";
import ContentDelegate from "./ContentDelegate";

const Delegates: React.FC<{ classActive: string }> = ({ classActive }) => {
  const [isDelegatesOpen, setIsDelegatesOpen] = useState<boolean>(true);

  const toggleDelegatesOpen = () => {
    setIsDelegatesOpen((prevState) => !prevState);
  };

  return (
    <div className="py-4">
      <button
        className={`flex items-center w-full mx-4 mb-2 ${
          isDelegatesOpen ? "dark:text-slate-200" : ""
        }`}
        onClick={toggleDelegatesOpen}
      >
        <Arrow
          className={`w-3 h-3 mr-2 rotate-90 transition ${
            isDelegatesOpen ? "rotate-180" : ""
          }`}
        />
        Delegates
      </button>
      <div className={isDelegatesOpen ? "visible" : "hidden"}>
        <ContentDelegate classActive={classActive} />
      </div>
    </div>
  );
};

export default Delegates;
