import React from "react";
import NavBar from "./Nav";
import { Card, Button, Accordion, Dropdown, Nav } from "react-bootstrap";
import Questions from "./Questions";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import AnsweredQuestions from "./AnsweredQuestions";

export default function Main() {
  const [displayAskedQuestions, setDisplayAskedQuestions] = useState("flex");
  const [displayAnsweredQuestions, setDisplayAnsweredQuestions] =
    useState("none");
  function seeAskedQuestions() {
    setDisplayAskedQuestions("flex");
    setDisplayAnsweredQuestions("none");
  }

  function seeAnsweredQuestions() {
    setDisplayAnsweredQuestions("flex");
    setDisplayAskedQuestions("none");
  }

  let navigate = useNavigate();
  window.onload = function () {
    navigate("main");
  };
  return (
    <div>
      <NavBar />
      <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link onClick={seeAskedQuestions}>Unanswered</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={seeAnsweredQuestions}>Answered</Nav.Link>
        </Nav.Item>
      </Nav>
      <Questions display={displayAskedQuestions} />
      <AnsweredQuestions display={displayAnsweredQuestions} />
    </div>
  );
}
