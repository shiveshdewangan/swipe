import React from "react";
import NavBar from "./components/navbar/navbar";
import Header from "./components/header/header";
import Container from "./components/container/container";
import { hot } from "react-hot-loader/root";
import "./App.css";

const App = () => {
  return (
    <>
      <NavBar />
      <Header />
      <Container />
    </>
  );
};

export default hot(App);
