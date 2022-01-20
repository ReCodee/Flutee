import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./GenerateWalletModal.css";
import { Button, Modal, Box, Typography, Alert } from "@mui/material";
import { generateWallet } from "./Reducer";

function GenerateWalletModal() {
  const state = useSelector((state) => state.Auth.value);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(
      generateWallet(state.HDPathString, state.seed, state.password, false)
    );
  };

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
                HDPathString: {state.HDString}.
                <br /> Recover lost password using the seed.
              </b>
            </Alert>
            <br />
            <Alert severity="success">{state.seed}</Alert>
            <br />
            <Alert severity="info">{state.password}</Alert>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default GenerateWalletModal;
