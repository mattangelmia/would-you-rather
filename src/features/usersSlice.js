import { createSlice } from "@reduxjs/toolkit";
import { answeredQuestionsReducer } from "./answeredQuestionsSlice";

const initialState = [
  {
    firstName: "matt",
    age: 30,
    askedTotal: 2,
  },

  {
    firstName: "mike",
    age: 25,
    askedTotal: 2,
  },
  {
    firstName: "steve",
    age: 22,
    askedTotal: 2,
  },
];

export const usersReducer = createSlice({
  name: "UsersSlice",
  initialState,
  reducers: {
    updateAskedTotal: (state, action) => {
      console.log(action.payload);
      let newState = action.payload;
      return newState;
    },
  },
});

export default usersReducer.reducer;
export const { updateAskedTotal } = usersReducer.actions;
