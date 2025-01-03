import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUserLoading: false,
  currentUser: null,
};

const currentUserSlice = createSlice({
  name: "currentUser",
  initialState: initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
    },
    clearCurrentUser: (state) => {
      state.currentUser = null;
      state.loading = false;
    },
    toggleCurrentUserLoading: (state) => {
      state.loading = !state.loading;
    },
  },
});

export const { setCurrentUser, clearCurrentUser, toggleCurrentUserLoading } =
  currentUserSlice.actions;
  const currentUserReducer =currentUserSlice.reducer;
export default currentUserReducer ;
