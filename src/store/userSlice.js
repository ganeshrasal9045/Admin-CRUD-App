import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
      // console.log(action.payload);
    },
    removeUser(state, action) {
      // console.log("remove " + action.payload);
      state.splice(action.payload, 1);
    },
    deleteUsers(state, action) {
      // console.log("deleted all users")
      return [];
    },
  },
});

export const { addUser, removeUser, deleteUsers } = userSlice.actions;
export default userSlice.reducer;
