import React, { useState, useEffect } from "react";
import { Card, Button, Accordion, Dropdown, Nav, Form } from "react-bootstrap";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateAskedTotal } from "../features/usersSlice";
import { addAnsweredQuestion } from "../features/askedQuestionsSlice";
import { addAnswered } from "../features/answeredQuestionsSlice";
import NavBar from "./Nav";
export default function NewPoll() {
  const [newOption1, setNewOption1] = useState("");
  const [newOption2, setNewOption2] = useState("");
  const [newAskedQuestion, setNewAskedQuestion] = useState({});

  const loggedInUser = useSelector((state) => state.loggedIn);
  const globalState = useSelector((state) => state);
  const dispatch = useDispatch();
  let numberOfAskedQuestions = globalState.questions.filter(
    (question) => question.askedBy === "matt"
  );
  console.log(numberOfAskedQuestions);

  let navigate = useNavigate();
  function goHome() {
    navigate("/");
  }

  function setQuestion(e) {
    if (e.target.placeholder === "Enter Option 1") {
      setNewOption1(e.target.value);
    }

    if (e.target.placeholder === "Enter Option 2") {
      setNewOption2(e.target.value);
    }
  }

  function logNewQuestion(e) {
    e.preventDefault();
    const newId =
      globalState.questions[globalState.questions.length - 1].id + 1;

    let newQuestion = {
      id: newId,
      option1: { name: newOption1, count: 0 },
      option2: { name: newOption2, count: 0 },
      askedBy: loggedInUser.authUser.firstName,
      answeredBy: [],
    };

    let currentUser = loggedInUser.authUser;
    let newTotal = currentUser.askedTotal + 1;
    let updatedUser = {
      ...currentUser,
      askedTotal: numberOfAskedQuestions.length + 1,
    };

    console.log(updatedUser);

    let filteredUsers = globalState.users.filter(
      (user) => user.firstName !== currentUser.firstName
    );

    let updatedUsers = filteredUsers.concat(updatedUser);

    setNewAskedQuestion(newQuestion);
    dispatch(addAnsweredQuestion(newQuestion));
    dispatch(updateAskedTotal(updatedUsers));

    goHome();
  }

  return (
    <div>
      <NavBar />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            border: "1px solid grey",
            width: "60vw",
            borderRadius: "10px",
            margin: "20px",
            padding: "10px",
          }}
        >
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <h4>Complete The Question</h4>
              <Form.Label>Would You Rather</Form.Label>
              <Form.Control
                type="input"
                placeholder="Enter Option 1"
                onChange={setQuestion}
              />
              <Form.Text className="text-muted">
                <h1>OR</h1>
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="input"
                placeholder="Enter Option 2"
                onChange={setQuestion}
              />
            </Form.Group>

            <Button variant="primary" onClick={logNewQuestion}>
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
