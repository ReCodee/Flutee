import React, { useState } from 'react'
import Header from '../Header/Header';
import { useEffect } from 'react';
import axios from "./BalanceMonitor";
import { Transaction } from '../../classes/transaction-ropsten';
import { useSelector } from 'react-redux';
import { getParams } from '../GenerateAndRestoreWalletModal/KeystoreLightwallet';
import { List, ListItem, ListItemText } from '@mui/material';
import SelectInput from '@mui/material/Select/SelectInput';

function TransactionMonitor() {
  const state = getParams();
  const transactions = [];
  const [t, setT] = useState([]);
  useEffect(() => {
     async function fetchTransactions() {
         const checkTransaction = await axios.get("/api",{
           params: {
             module : "account",
             action : "txlist",
             address: "0xE486662aeF6E62D1F59220ebc2Db467f5B6D4b08",
             startblock: "",
             endblock: "",
             page: "1",
             offset: "10",
             sort: "asc",
             apikey: "G46BB2QS9NA9I8IJJCT5MPAQSQ8R5IHTA9"
           }
         })
         for ( let i = 0 ; i < 10 ; i++ ) {
          transactions.push(new Transaction( i, checkTransaction.data.result[i].from,
            checkTransaction.data.result[i].to, checkTransaction.data.result[i].gasUsed));
         }
        console.log(transactions)
        setT(transactions);
     }
     fetchTransactions();
     
  }, []);
  
  return (
    <div>
     <Header /> 
     {t.map((tn) => (
       <div key={tn.id}>
         <h1>Transaction {tn.id + 1}</h1>
         <h2>from: {tn.from}</h2>
         <h2>to: {tn.to}</h2>
         <h2>gasUsed: {tn.gasUsed}</h2>
       </div>
     ))}
    </div>
  )
}

export default TransactionMonitor