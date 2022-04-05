import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./GenerateWalletModal.css";
import { Button, Modal, Box, Typography, Alert } from "@mui/material";
import { generateWallet } from "./Reducer";
import { useNavigate } from "react-router-dom";
import { generateVault } from "./KeystoreLightwallet";

function GenerateWalletModal() {
  const state = useSelector((state) => state.Auth.value);
  const dispatch = useDispatch();
  const args = {
    password : state.password,
    seedPhrase : state.seedPhrase,
    hdPathString: state.hdPathString
  }
  generateVault(args);
  const handleClose = () => {
    dispatch(
      generateWallet(
        state.hdPathString,
        state.seedPhrase,
        state.password,
        false,
        "",
        "not now"
      )
    );
  };
  const navigate = useNavigate();
  return (
    <div className="generate_wallet_modal">
      <div className="generate_modal">
        <Modal
          open={state.open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <div className="alerts">
            <Alert severity="info">
              <b>The seed is imposible to recover if lost </b>
              <b>
                Copy the generated seed to a safe location.
                <br />
                HDPathString: {state.hdPathString}
                <br /> Recover lost password using the seed.
              </b>
            </Alert>
            <br />
            <Alert severity="success">{state.seedPhrase}</Alert>
            <br />
            <Alert severity="info">{state.password}</Alert>
            <br />
            <div className="next_button">
              <Button
                onClick={() => {
                  navigate("/wallet");
                }}
              >
                Next
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default GenerateWalletModal;
