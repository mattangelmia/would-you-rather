import React from "react";
import { Card, Button, Accordion, Dropdown, Nav, Form } from "react-bootstrap";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useState, useEffect, useReducer } from "react";
import { useSelector, useDispatch } from "react-redux";

import NavBar from "./Nav";
import { addAnswered } from "../features/answeredQuestionsSlice";
import { removeAnsweredQuestion } from "../features/askedQuestionsSlice";
import Results from "./Results";

export default function QuestionCard(props) {
  const [answer, setAnswer] = useState("");
  const [option1Count, setOption1Count] = useState(0);
  const [option2Count, setOption2Count] = useState(0);
  const [resultsState, setResultsState] = useState("none");
  const [questionCardDisplayState, setQuestionCardDisplayState] =
    useState("flex");
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const loggedInUser = useSelector((state) => state.loggedIn);
  const globalState = useSelector((state) => state);

  let askedQuestionId = Number(location.pathname.split("/").pop());

  let askedQuestionByUser = globalState.questions.filter(
    (question) => question.id === askedQuestionId
  );

  // console.log([
  //   ...askedQuestionByUser[0].answeredBy,
  //   loggedInUser.authUser.firstName,
  // ]);

  // console.log({
  //   ...askedQuestionByUser[0],
  //   answeredBy: [
  //     ...askedQuestionByUser[0].answeredBy,
  //     loggedInUser.authUser.firstName,
  //   ],
  // });

  // console.log(loggedInUser.authUser.firstName);

  // console.log(globalState.answeredQuestions);

  function handleClick(e) {
    setAnswer(e.target.parentElement.innerText);
    // console.log(e.target.parentElement.innerText);

    let filteredQuestion = globalState.questions.filter(
      (question) =>
        question.option1.name === e.target.parentElement.innerText ||
        question.option2.name === e.target.parentElement.innerText
    );

    if (e.target.parentElement.innerText === filteredQuestion[0].option1.name) {
      setOption1Count(1);
      setOption2Count(0);
    } else {
      setOption2Count(1);
      setOption1Count(0);
    }

    // if (filteredQuestion[0].option1.name === answer) {
    //   console.log("option1 selected");
    //   setOption1Count(1);
    // } else {
    //   console.log("option 2 selected");
    //   setOption2Count(2);
    // }

    let newfilteredQuestion = {
      ...filteredQuestion[0],
      answeredBy: [
        {
          name: loggedInUser.authUser.firstName,
          answer: e.target.parentElement.innerText,
        },
      ],
    };

    // console.log(newfilteredQuestion);

    let filteredQuestionsList = globalState.questions.filter(
      (question) => question.id !== newfilteredQuestion.id
    );

    let newQuestions = [
      ...filteredQuestionsList,
      {
        answeredBy: newfilteredQuestion.answeredBy,
        askedBy: newfilteredQuestion.askedBy,
        id: 4,
        option1: newfilteredQuestion.option1,
        option2: newfilteredQuestion.option2,
      },
    ];
  }

  const removeQuestion = (e) => {
    let filteredQuestion = globalState.questions.filter(
      (question) =>
        question.option1.name === answer || question.option2.name === answer
    );

    let newFilteredQuestion = {
      ...filteredQuestion[0],
      answeredBy: [
        ...filteredQuestion[0].answeredBy,
        {
          name: loggedInUser.authUser.firstName,
          answer: answer,
        },
      ],
    };

    let filteredQuestionsList = globalState.questions.filter(
      (question) => question.id !== newFilteredQuestion.id
    );

    let newQuestions = [
      ...filteredQuestionsList,
      {
        answeredBy: newFilteredQuestion.answeredBy,
        askedBy: newFilteredQuestion.askedBy,
        id: newFilteredQuestion.id,
        option1: {
          ...newFilteredQuestion.option1,
          count: newFilteredQuestion.option1.count + option1Count,
        },
        option2: {
          ...newFilteredQuestion.option2,
          count: newFilteredQuestion.option2.count + option2Count,
        },
      },
    ];

    // let payLoad = {
    //   askedBy: askedQuestionByUser[0].askedBy,
    //   id: askedQuestionByUser[0].id,
    //   option1: askedQuestionByUser[0].option1,
    //   option2: askedQuestionByUser[0].option2,
    //   answeredBy: loggedInUser.authUser.firstName,
    //   answeredQuestion: answer,
    // };

    // console.log("submitted");

    dispatch(
      addAnswered({
        answeredBy: newFilteredQuestion.answeredBy,
        askedBy: newFilteredQuestion.askedBy,
        id: newFilteredQuestion.id,
        option1: {
          ...newFilteredQuestion.option1,
          count: newFilteredQuestion.option1.count + option1Count,
        },
        option2: {
          ...newFilteredQuestion.option2,
          count: newFilteredQuestion.option2.count + option2Count,
        },
      })
    );
    dispatch(removeAnsweredQuestion(newQuestions));
    //
    setResultsState("block");
    setQuestionCardDisplayState("none");
  };

  function goBack() {
    navigate("/");
  }

  window.onload = function () {
    navigate("/main");
  };

  return (
    <div>
      <div>
        <NavBar />
        <Results display={resultsState} goBack={goBack} />
        <div
          style={{
            display: `${questionCardDisplayState}`,
            justifyContent: "center",
            marginTop: "5%",
          }}
        >
          <Card style={{ width: "40vw" }}>
            <Card.Header>Featured</Card.Header>
            <Card.Body>
              <Card.Title>{askedQuestionByUser[0].askedBy} asks: </Card.Title>
              <h1>Would You Rather</h1>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <form style={{ marginBottom: "20px" }}>
                  <label style={{ marginRight: "30px" }}>
                    <input type="radio" name="test" onClick={handleClick} />
                    {askedQuestionByUser[0].option1.name}
                  </label>
                  <label>
                    <input type="radio" name="test" onClick={handleClick} />
                    {askedQuestionByUser[0].option2.name}
                  </label>
                </form>
                <Button variant="primary" onClick={removeQuestion}>
                  Submit
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
