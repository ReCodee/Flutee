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
import { useNavigate } from "react-router-dom";

function LightWallet() {
  const dispatch = useDispatch();
  const password = generateString(generatedPasswordLength);
  const extraEntropy = generateString(generatedPasswordLength);
  const seed = lightwallet.keystore.generateRandomSeed(extraEntropy);
  const navigate = useNavigate();

  return (
    <div>
      <Button
        onClick={() => {
          navigate("/seed");
          dispatch(
            generateWallet({
              hdPathString: `m/44'/60'/0'/0`,
              seedPhrase: seed,
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
