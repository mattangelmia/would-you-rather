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

export default function Results(props) {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const loggedInUser = useSelector((state) => state.loggedIn);
  const globalState = useSelector((state) => state);

  let askedQuestionId = Number(location.pathname.split("/").pop());

  let askedQuestionByUser = globalState.questions.filter(
    (question) => question.id === askedQuestionId
  );

  const totalVotes =
    askedQuestionByUser[0].option1.count + askedQuestionByUser[0].option2.count;

  return (
    <div style={{ display: `${props.display}` }}>
      <div>
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: "5%" }}
        >
          <Card style={{ width: "40vw" }}>
            <Card.Header>Featured</Card.Header>
            <Card.Body>
              <Card.Title>matt asks: </Card.Title>
              <h1>Results</h1>
              <h4>Would You Rather</h4>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                  style={{
                    border: "1px solid grey",
                    borderRadius: "10px",
                    marginBottom: "10px",
                  }}
                >
                  <h3>{askedQuestionByUser[0].option1.name}</h3>
                  <h5>
                    {askedQuestionByUser[0].option1.count}out of {totalVotes}
                    votes
                  </h5>
                </div>

                <div
                  style={{
                    border: "1px solid grey",
                    borderRadius: "10px",
                    marginBottom: "10px",
                  }}
                >
                  <h3>{askedQuestionByUser[0].option2.name}</h3>
                  <h5>
                    {askedQuestionByUser[0].option2.count}out of {totalVotes}
                    votes
                  </h5>
                </div>
                <Button variant="primary" onClick={props.goBack}>
                  Back
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
