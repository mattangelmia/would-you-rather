import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Button, Accordion, Dropdown, Nav } from "react-bootstrap";

export default function NavBar() {
  const state = useSelector((state) => state);

  console.log(state);

  const loggedInFirstName = state.loggedIn.authUser.firstName;

  return (
    <div style={{ display: "flex" }}>
      <Nav justify variant="tabs" defaultActiveKey="/home">
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
      <h5 style={{ paddingLeft: "15px", paddingTop: "15px" }}>Welcome</h5>
    </div>
  );
}
