import * as React from "react";
import "./App.css";
import GenerateWalletModal from "./components/GenerateAndRestoreWalletModal/GenerateWalletModal";
import LightWallet from "./components/Homepage/Homepage";
function App() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div className="App">
      <LightWallet />
      <GenerateWalletModal />
    </div>
  );
}

export default App;
