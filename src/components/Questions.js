import React from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { Card, Button, Accordion, Dropdown, Nav } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

export default function Questions(props) {
  const navigate = useNavigate();
  function getQuestion() {
    // navigate(`question/${question.id}`);
  }
  console.log(useSelector((state) => state.answeredQuestions));

  const state = useSelector((state) => state.questions);
  const globalState = useSelector((state) => state);
  let answeredBy = state.map((stateItem) => stateItem.answeredBy);
  let arr = answeredBy.map((item) => item);
  const flattened = arr.flat();
  let filtered = flattened.filter(
    (item) => item === globalState.loggedIn.authUser.firstName
  );

  const newState = state.filter(
    (stateItem) => !stateItem.answeredBy.includes(filtered[0])
  );

  console.log(globalState.questions.filter);

  console.log(
    globalState.questions.filter(
      (element) => globalState.answeredQuestions.id === element.id
    )
  );

  return (
    <div
      id="questions-section"
      style={{
        display: `${props.display}`,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {globalState.questions.map((question, index) => (
        <div key={index}>
          <Card style={{ width: "40vw", margin: "30px" }}>
            <Card.Header>Featured</Card.Header>
            <Card.Body>
              <Card.Title>{question.askedBy} asks: </Card.Title>
              <h1>Would You Rather</h1>
              <Card.Text>{question.option1.name}</Card.Text>
              <Card.Text>or</Card.Text>
              <Card.Text>{question.option2.name}</Card.Text>

              <Button
                variant="primary"
                onClick={() => navigate(`question/${question.id}`)}
              >
                Answer
              </Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}
