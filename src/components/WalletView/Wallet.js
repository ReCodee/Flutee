import React, { useState } from "react";
import KeystoreLightwallet, { generateVault } from "../GenerateAndRestoreWalletModal/KeystoreLightwallet";
import { getParams } from "../GenerateAndRestoreWalletModal/KeystoreLightwallet";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getBalance } from "../AccountMonitor/BalanceMonitor";
import axios from "../AccountMonitor/BalanceMonitor";
import "./Wallet.css";
import Header from "../Header/Header";
import { render } from "@testing-library/react";
import { generateWallet } from "../GenerateAndRestoreWalletModal/Reducer";

export default function Wallet() {
   
  const state = useSelector((state) => state.Auth.value);
  const [balance, setBalance] = useState(0);
  const sol = getParams();
  console.log(state.seedPhrase);
  console.log(getParams().address);
  console.log(sol.address);
  useEffect(() => {
     async function fetchBalance() {
       const checkbalance = await axios.get("/api", {
         params: {
           module: "account",
           action: "balance",
           address: sol.address,
           tag: "latest",
           apikey: "G46BB2QS9NA9I8IJJCT5MPAQSQ8R5IHTA9"
         }
       });
       console.log(checkbalance.data);
       setBalance(checkbalance.data.result)
     }
     fetchBalance();
  }, [])
  return ( 
    <div>
      <Header  />
      <h2> Your Ethereum Wallet address is : {sol.address}</h2>
      <br />
      <h2> Your Balance is: {balance}</h2>
      <br />
      <h2> Other tokens that you hold are : </h2> 
    </div>
  );
}
