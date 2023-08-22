import React from "react";
import ScrollToTop from "./components/ScrollToTop";
import Router from "./routes";
import "./App.css";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Router />
    </>
  );
};

export default App;
