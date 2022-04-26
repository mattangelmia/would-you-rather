import React from "react";
import { Card, Button, Accordion, Dropdown, Nav, Form } from "react-bootstrap";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "./Nav";
export default function QuestionCard(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const loggedInUser = useSelector((state) => state.loggedIn);
  const globalState = useSelector((state) => state);

  let askedQuestionId = Number(location.pathname.split("/").pop());
  console.log(askedQuestionId);

  let askedQuestionByUser = globalState.questions.filter(
    (question) => question.id === askedQuestionId
  );

  console.log(askedQuestionByUser);

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
              <Card.Title>{loggedInUser.authUser.firstName} asks: </Card.Title>
              <h1>Would You Rather</h1>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label>
                  <input type="radio" name="test" />
                  {askedQuestionByUser[0].option1}
                </label>
                <label>
                  <input type="radio" name="test" />
                  {askedQuestionByUser[0].option2}
                </label>
              </div>
              <Button variant="primary">Answer</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
