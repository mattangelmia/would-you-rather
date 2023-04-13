import React from "react";
import { useSelector, useDispatch } from "react-redux";
import NavBar from "./Nav";
import { Card, Button, Accordion, Dropdown, Nav } from "react-bootstrap";

export default function Leaderboard() {
  console.log();

  const globalState = useSelector((state) => state);
  const users = globalState.users;
  console.log(users);
  const totals = users.map((user) => user.askedTotal);
  console.log(totals.sort((a, b) => b - a));

  //created a copy of users in order to properly sort the array by the asked total property
  const sorted = [...users].sort(
    ({ askedTotal: a }, { askedTotal: b }) => b - a
  );
  console.log(sorted);

  return (
    <div>
      <NavBar />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>Leaderboard</h1>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          position: "relative",
          left: "33vw",
        }}
        id="leaderboard-card-div"
      >
        {sorted.map((user, index) => (
          <Card style={{ width: "30vw", margin: "30px" }} id="question-card">
            <Card.Header>{user.firstName}</Card.Header>
            <Card.Body>
              <div style={{ display: "flex" }}>
                <Card.Title
                  style={{
                    borderRight: "2px solid black",
                    paddingRight: "1rem",
                  }}
                >
                  Asked Questions{" "}
                </Card.Title>

                <Card.Text style={{ marginLeft: "1rem" }}>
                  {user.askedTotal}{" "}
                </Card.Text>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}
