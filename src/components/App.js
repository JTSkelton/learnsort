import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Body from "./Body";
import "bootswatch/dist/darkly/bootstrap.min.css";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Header />
      <Body />
    </React.Fragment>
  );
}

export default App;
