import React from "react";
import { generate_vault } from "../GenerateAndRestoreWalletModal/Keystore-Lightwallet";
import { keyFromPasswordPromise } from "../GenerateAndRestoreWalletModal/Keystore-Lightwallet";
import { useSelector } from "react-redux";

export default function Wallet() {
  const state = useSelector((state) => state.Auth.value);
  const param = {
    password: state.password,
    seedPhrase: state.seedPhrase,
    hdPathString: state.hdPathString,
  };
  const ks = generate_vault(param);
  const pwDerivedKey = keyFromPasswordPromise(param.password, ks);
  //const address = ks.generateNewAddress(pwDerivedKey, 1);
  console.log(pwDerivedKey);
  return (
    <div>
      <h1>Wallet Is Here {state.hdPathString}</h1>
    </div>
  );
}
