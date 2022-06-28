import { createSlice } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";

const initialState = [];

export const answeredQuestionsReducer = createSlice({
  name: "askedQuestionsSlice",
  initialState,
  reducers: {
    addAnswered: (state, action) => {
      let newState = state.concat(action.payload);
      console.log(action.payload.id);
      return newState;
    },
  },
});

export default answeredQuestionsReducer.reducer;
export const { addAnswered } = answeredQuestionsReducer.actions;
