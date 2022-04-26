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
  console.log(location.pathname);
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
    console.log(selectedUser);
    // setauthorizedUser(
    //   users.filter((userName) => userName.firstName === user)[0]
    // );
    dispatch(setLoggedInUser(selectedUser));
    navigate("/");
  }

  // useEffect(() => {
  //   dispatch(setLoggedInUser(authorizedUser));
  // }, [authorizedUser]);

  function authorizeLogin() {
    console.log(state);
  }

  console.log(state);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card style={{ width: "50%" }}>
          <Card.Header>Would you Rather?</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
          </Card.Body>
          <Dropdown className="d-inline mx-2" onClick={handleSelect}>
            <Dropdown.Toggle
              id="dropdown-autoclose-true"
              style={{ width: "60%" }}
            >
              {user}
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ width: "60%" }}>
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
              style={{ width: "20%", marginTop: "3%", marginBottom: "1%" }}
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
