import CanvasFrame from "../components/CanvasFrame";
import { TreeContext } from "../context/tree.context";
import { useContext, useState } from "react";
import ConnectMetamask from "../components/ConnectMetamask";
import useLsystem from "../hook/lsystem.hook";

export default function Plant() {
  const { setTree } = useContext(TreeContext);
  const [metamaskAddress, setMetamaskAddress] = useState("");

  // use hook to store data from lsystem
  const data = useLsystem(metamaskAddress);

  // put data into context
  const handleChangeTree = () => {
    setTree(data);
  };

  return (
    <div className="w-screen h-screen">
      <div className="flex flex-col justify-center items-center">
        <ConnectMetamask onSetMetamaskAddress={setMetamaskAddress} />
        <button
          className="rounded-sm bg-green-400 p-2"
          onClick={handleChangeTree}
        >
          Plant Tree
        </button>
      </div>
      {/* <CanvasOld /> */}
      <CanvasFrame />
    </div>
  );
}
