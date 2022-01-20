import {
  generatedPasswordLength,
  hdPathString,
  offlineModeString,
  defaultNetwork,
  localStorageKey,
} from "../../utils/constants";
import generateString from "../../utils/crypto";
import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { generateWallet } from "../GenerateAndRestoreWalletModal/Reducer";
import lightwallet from "eth-lightwallet";

function LightWallet() {
  const dispatch = useDispatch();
  const password = generateString(generatedPasswordLength);
  const extraEntropy = generateString(generatedPasswordLength);
  const seed = lightwallet.keystore.generateRandomSeed(extraEntropy);

  return (
    <div>
      <Button
        onClick={() => {
          dispatch(
            generateWallet({
              HDPathString: "m/44'/60'/0'/0",
              seed: seed,
              password: password,
              open: true,
            })
          );
        }}
      >
        New Wallet
      </Button>
      <Button>Restore Wallet</Button>
    </div>
  );
}

export default LightWallet;
