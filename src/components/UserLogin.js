import React from "react";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useState, useEffect } from "react";
import { Card, Button, Accordion, Dropdown } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { setLoggedInUser } from "../features/loggedInSlice";
import { loginUser } from "../features/loggedInSlice";

export default function UserLogin() {
  const location = useLocation();

  let navigate = useNavigate();
  const users = useSelector((state) => state.users);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [user, setUser] = useState("Select A User");
  const [authorizedUser, setauthorizedUser] = useState({});
  const handleSelect = (e) => {
    setUser(e.target.text);
  };

  function authorizeUser() {
    const selectedUser = users.find((userName) => userName.firstName === user);

    // setauthorizedUser(
    //   users.filter((userName) => userName.firstName === user)[0]
    // );
    dispatch(setLoggedInUser(selectedUser));
    navigate("/");
  }

  // useEffect(() => {
  //   dispatch(setLoggedInUser(authorizedUser));
  // }, [authorizedUser]);

  function authorizeLogin() {}

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card style={{ width: "50%" }} id="login-card">
          <Card.Header>Would you Rather?</Card.Header>
          <Card.Body>
            <Card.Title>Select your user below and login</Card.Title>

          </Card.Body>
          <Dropdown className="d-inline mx-2" onClick={handleSelect} id="toggle-dropdown">
            <Dropdown.Toggle
              id="dropdown-autoclose-true"
              style={{ width: "70%" }}
            >
              {user}
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ width: "70%" }}>
              {users.map((user, index) => (
                <Dropdown.Item href="#" key={index}>
                  {user.firstName}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <div>
            <Button
              variant="success"
              style={{ width: "60%", marginTop: "3%", marginBottom: "1%" }}
              onClick={authorizeUser}
            >
              Login
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
