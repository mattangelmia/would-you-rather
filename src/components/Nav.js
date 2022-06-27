import React, { useEffect } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Card, Button, Accordion, Dropdown, Nav } from "react-bootstrap";
import { logOutUser } from "../features/loggedInSlice";

export default function NavBar() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  function logOut() {
    navigate("/main");
  }

  const loggedInFirstName = state.loggedIn.authUser.firstName;

  return (
    <div style={{ display: "flex" }}>
      <Nav
        justify
        variant="tabs"
        defaultActiveKey="/home"
        style={{ width: "100vw" }}
      >
        <Nav.Item>
          <Nav.Link>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>New Poll </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>Leaderboard</Nav.Link>
        </Nav.Item>
      </Nav>
      <div
        style={{
          display: "flex",
          borderBottom: "1px solid #dee2e6",
        }}
      >
        <h5 style={{ paddingLeft: "15px", paddingTop: "15px" }}>
          Welcome {loggedInFirstName}
        </h5>
        <Button onClick={logOut} style={{ marginLeft: "5%" }}>
          Logout
        </Button>
      </div>
    </div>
  );
}
