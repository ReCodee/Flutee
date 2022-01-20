import { createSlice } from "@reduxjs/toolkit";

export const walletSlice = createSlice({
  name: "Auth",
  initialState: {
    value: {
      HDPathString: "m/44'/60'/0'/0",
      seed: "",
      password: "",
      open: false,
    },
  },
  reducers: {
    generateWallet: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { generateWallet } = walletSlice.actions;
