import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import "bootswatch/dist/darkly/bootstrap.min.css";
import BubbleSortDisplay from "./BubbleSort";
import RandomArr from "./RandomArr";
import QuickSortDisplay from "./QuickSort";
import MergeSortDisplay from "./MergeSort";
import InsertionSortDisplay from "./InsertionSort";
import SelectionSortDisplay from "./SelectionSort";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Header />
      <BubbleSortDisplay />
      <QuickSortDisplay />
      <MergeSortDisplay />
      <InsertionSortDisplay />
      <SelectionSortDisplay />
    </React.Fragment>
  );
}

export default App;
