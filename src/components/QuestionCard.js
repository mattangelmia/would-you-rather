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
import { addAnsweredQuestion } from "../features/answeredQuestionsSlice";
import { removeAnsweredQuestion } from "../features/askedQuestionsSlice";

export default function QuestionCard(props) {
  const [answer, setAnswer] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const loggedInUser = useSelector((state) => state.loggedIn);
  const globalState = useSelector((state) => state);

  let askedQuestionId = Number(location.pathname.split("/").pop());

  let askedQuestionByUser = globalState.questions.filter(
    (question) => question.id === askedQuestionId
  );

  function handleClick(e) {
    setAnswer(e.target.parentElement.innerText);
  }

  const removeQuestion = () => {
    let payLoad = {
      id: askedQuestionByUser[0].id,
      answeredBy: loggedInUser.authUser.firstName,
      answeredQuestion: answer,
    };

    dispatch(addAnsweredQuestion(payLoad));
    dispatch(removeAnsweredQuestion(payLoad));
    navigate("/");
  };

  window.onload = function () {
    navigate("/main");
  };

  return (
    <div>
      <div>
        <NavBar />

        <div
          style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}
        >
          <Card style={{ width: "40vw" }}>
            <Card.Header>Featured</Card.Header>
            <Card.Body>
              <Card.Title>{askedQuestionByUser[0].askedBy} asks: </Card.Title>
              <h1>Would You Rather</h1>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label>
                  <input type="radio" name="test" onClick={handleClick} />
                  {askedQuestionByUser[0].option1}
                </label>
                <label>
                  <input type="radio" name="test" onClick={handleClick} />
                  {askedQuestionByUser[0].option2}
                </label>
              </div>
              <Button variant="primary" onClick={removeQuestion}>
                Answer
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
