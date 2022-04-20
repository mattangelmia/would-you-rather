import logo from "./logo.svg";
import "./App.css";
import TestComponent from "./components/TestComponent";
import Main from "./components/Main";
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
        <Route exact path="/" element={<UserLogin />} />
        <Route path="main" element={<Main />} />

        <Route path="testcomponent" element={<TestComponent />} />
      </Routes>
    </div>
  );
}

export default App;
