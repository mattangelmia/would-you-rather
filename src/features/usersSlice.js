import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    firstName: "matt",
    age: 30,
    total: 0,
  },

  {
    firstName: "mike",
    age: 25,
    total: 0,
  },
  {
    firstName: "steve",
    age: 22,
    total: 0,
  },
];

export const usersReducer = createSlice({
  name: "UsersSlice",
  initialState,
});

export default usersReducer.reducer;
