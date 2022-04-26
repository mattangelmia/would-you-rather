import React from "react";
import NavBar from "./Nav";
import { Card, Button, Accordion, Dropdown, Nav } from "react-bootstrap";
import Questions from "./Questions";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

export default function Main() {
  let navigate = useNavigate();
  window.onload = function () {
    navigate("main");
  };
  return (
    <div>
      <NavBar />
      <Nav fill variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link>Unanswered</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>Answered</Nav.Link>
        </Nav.Item>
      </Nav>
      <Questions />
    </div>
  );
}
