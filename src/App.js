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
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="main" element={<UserLogin />} />
        <Route path="/" element={<Main />} />
        <Route path="question/:questionId" element={<QuestionCard />} />
        <Route path="/testcomponent" element={<TestComponent />} />
      </Routes>
    </div>
  );
}

export default App;
