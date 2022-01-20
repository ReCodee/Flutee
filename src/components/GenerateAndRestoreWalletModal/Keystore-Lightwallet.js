import lightwallet from "eth-lightwallet";


var PasswordDerivedKey;
export function generate_vault(param) {
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
        PasswordDerivedKey = pwDerivedKey;
        var address = ks.getAddresses()[0];
        var prv_key = ks.exportPrivateKey(address, pwDerivedKey);

        console.log("address and key: ", address, prv_key);
      });
    });
  });
}

export function keyFromPasswordPromise(param, ks) {
  return PasswordDerivedKey;
}
