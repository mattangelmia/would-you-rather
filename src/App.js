import logo from "./logo.svg";
import "./App.css";
import TestComponent from "./components/TestComponent";
import Main from "./components/Main";
import QuestionCard from "./components/QuestionCard";
import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { Card, Button, Accordion, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import UserLogin from "./components/UserLogin";
import Leaderboard from "./components/Leaderboard";
import Nav from "./components/Nav";
import NewPoll from "./components/NewPoll";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="main" element={<UserLogin />} />
        <Route exact path="leaderboard" element={<Leaderboard />} />
        <Route path="/" element={<Main />} />
        <Route exact path="newpoll" element={<NewPoll />} />
        <Route path="question/:questionId" element={<QuestionCard />} />
        <Route path="/testcomponent" element={<TestComponent />} />
      </Routes>
    </div>
  );
}

export default App;
