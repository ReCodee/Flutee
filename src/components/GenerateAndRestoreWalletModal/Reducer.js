import { createSlice } from "@reduxjs/toolkit";

export const walletSlice = createSlice({
  name: "Auth",
  initialState: {
    value: {
      hdPathString: `m/44'/60'/0'/0`,
      seedPhrase: "",
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
