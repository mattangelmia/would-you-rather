import { createSlice } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";

const initialState = [];

export const answeredQuestionsReducer = createSlice({
  name: "askedQuestionsSlice",
  initialState,
  reducers: {
    addAnsweredQuestion: (state, action) => {
      state.push(action.payload);
      console.log(action.payload.id);
    },
  },
});

export default answeredQuestionsReducer.reducer;
export const { addAnsweredQuestion } = answeredQuestionsReducer.actions;
