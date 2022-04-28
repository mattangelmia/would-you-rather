import React from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { Card, Button, Accordion, Dropdown, Nav } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

export default function Questions(asked) {
  const navigate = useNavigate();
  function getQuestion() {
    // navigate(`question/${question.id}`);
  }

  const state = useSelector((state) => state.questions);

  return (
    <div
      id="questions-section"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {state.map((question, index) => (
        <div key={index}>
          <Card style={{ width: "40vw" }}>
            <Card.Header>Featured</Card.Header>
            <Card.Body>
              <Card.Title>{question.askedBy} asks: </Card.Title>
              <h1>Would You Rather</h1>
              <Card.Text>{question.option1}</Card.Text>
              <Card.Text>or</Card.Text>
              <Card.Text>{question.option2}</Card.Text>

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
