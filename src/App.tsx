import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Container fluid className="vh-100 p-0">
      <Outlet />
    </Container>
  );
}

export default App;
