import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    option1: "code in javascript",
    option2: "code in python",
    askedBy: "matt",
  },

  {
    id: 2,
    option1: "eat italian food",
    option2: "eat chinese food",
    askedBy: "steve",
  },
  {
    id: 3,
    option1: "invest into the stock market",
    option2: "invest into the cryptocurrency",
    askedBy: "mike",
  },
];

export const askedQuestionsReducer = createSlice({
  name: "askedQuestionsSlice",
  initialState,
});

export default askedQuestionsReducer.reducer;
