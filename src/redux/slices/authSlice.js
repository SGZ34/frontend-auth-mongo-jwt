import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: undefined,
    status: "checking",
    errorMessage: undefined,
  },
  reducers: {
    onChecking: (state) => {
      state.user = undefined;
      state.status = "checking";
      state.errorMessage = undefined;
    },
    onLoging: (state, { payload }) => {
      state.user = payload;
      state.status = "authenticated";
      state.errorMessage = undefined;
    },
    onLogout: (state, { payload }) => {
      state.user = undefined;
      state.status = "not-authenticated";
      state.errorMessage = payload;
    },
    clearErrorMessage: (state) => {
      state.errorMessage = undefined;
    },
  },
});
export const { onChecking, onLoging, onLogout, clearErrorMessage } =
  authSlice.actions;
