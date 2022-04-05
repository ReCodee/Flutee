import * as React from "react";
import "./App.css";
import GenerateWalletModal from "./components/GenerateAndRestoreWalletModal/GenerateWalletModal";
import LightWallet from "./components/Homepage/Homepage";
import Wallet from "./components/WalletView/Wallet";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import TransactionMonitor from "./components/AccountMonitor/TransactionMonitor";

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
    <Router>
      <Routes>
        <Route path="/" element={<LightWallet />} />
        <Route path="/seed" element={<GenerateWalletModal />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/transactions" element={<TransactionMonitor />} />
      </Routes>
    </Router>
  );
}

export default App;
