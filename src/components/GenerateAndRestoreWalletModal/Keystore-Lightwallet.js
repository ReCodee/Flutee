import lightwallet from "eth-lightwallet";

function generate_vault(password, seed, HDPathString) {
    return new Promise(function(myResolve, myReject) {
        lightwallet.keystore.createVault({
            password,
            seed,
            HDPathString
        }, (err, ks) => {
            if (err != null) 
              myReject(err);
            else 
              myResolve(ks);  
        })
    });
}

function generate