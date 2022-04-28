import { createSlice } from "@reduxjs/toolkit";
import { answeredQuestionsReducer } from "./answeredQuestionsSlice";

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
  reducers: {
    removeAnsweredQuestion: (state, action) => {
      console.log("removed");
      let filteredState = state.filter(
        (stateItem) => stateItem.id !== action.payload.id
      );
      return filteredState;
    },
  },
});

export default askedQuestionsReducer.reducer;
export const { removeAnsweredQuestion } = askedQuestionsReducer.actions;
