import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import RandomArr from "./RandomArr";
import "bootswatch/dist/darkly/bootstrap.min.css";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Header />
      <RandomArr />
    </React.Fragment>
  );
}

export default App;
