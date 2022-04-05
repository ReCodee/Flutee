import lightwallet from "eth-lightwallet";
import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { generateWallet } from "./Reducer";

var address, pwdKey, privateKey;
function KeystoreLightwallet() {

  

  return (
    <div></div>
  )
}
export function generateVault(param) {
  return new Promise(function (myResolve, myReject) {
    lightwallet.keystore.createVault(param, (err, ks) => {
      ks.keyFromPassword(param.password, function (err, pwDerivedKey) {
        if (!ks.isDerivedKeyCorrect(pwDerivedKey)) {
          throw new Error("Incorrect derived key!");
        }

        try {
          ks.generateNewAddress(pwDerivedKey, 1);
        } catch (err) {
          console.log(err);
          console.trace();
        }
         pwdKey = pwDerivedKey;
         address = ks.getAddresses()[0];
         privateKey = ks.exportPrivateKey(ks.getAddresses()[0], pwDerivedKey);
        console.log("address and key: ", address, pwdKey);
      });
    })
  })
}

export function getParams() {
  return {
    pwdKey,
    address,
    privateKey
  };
}


