import React from 'react'
import "./Header.css";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

function Header() {
    const navigate = useNavigate();
   const goToBalance = () => {
      navigate("/wallet");
   };

   const goToTransactions = () => {
     navigate("/transactions")
};

const goToCollectibles = () => {
     navigate("/collectibles");
};

const goToSettings = () => {
    navigate("/settings")
};

  return (
    <div className='header'>
        <div className = "balanceButton">
        <Button onClick={goToBalance}>Balance</Button>
        </div>
        <div className = "transactionsButton">
        <Button  onClick={goToTransactions}>Transactions</Button>
        </div>
        <div className = "collectiblesButton">
        <Button  onClick={goToCollectibles}> Collectibles </Button>
        </div>
        <div className = "settingsButton">
        <Button  onClick={goToSettings}> Settings </Button>
          </div> 
        
        
        
        
    </div>
  )
}

export default Header