import React from "react";
import { generate_vault } from "../GenerateAndRestoreWalletModal/Keystore-Lightwallet";
import { getParam } from "../GenerateAndRestoreWalletModal/Keystore-Lightwallet";
import { useSelector } from "react-redux";

export default function Wallet() {
  const state = useSelector((state) => state.Auth.value);
  const param = {
    password: state.password,
    seedPhrase: state.seedPhrase,
    hdPathString: state.hdPathString,
  };
  const ks = generate_vault(param);
  const params = getParam();
  //const address = ks.generateNewAddress(pwDerivedKey, 1);
  console.log(param.seedPhrase);
  return (
    <div>
      <h2> Your Ethereum Wallet is :</h2>
      <br />
      <h2> {params.address}</h2>
    </div>
  );
}
