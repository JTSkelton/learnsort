import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import "bootswatch/dist/darkly/bootstrap.min.css";
import BubbleSort from "./BubbleSort";
import RandomArr from "./RandomArr";
import QuickSort from "./QuickSort";
import MergeSort from "./MergeSort";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Header />
      <BubbleSort />
      <QuickSort />
      <MergeSort />
    </React.Fragment>
  );
}

export default App;
