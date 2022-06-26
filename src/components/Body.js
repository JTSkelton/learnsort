import React, { useState } from "react";
import BubbleSortDisplay from "./Algos/BubbleSort";
import QuickSortDisplay from "./Algos/QuickSort";
import "../App.css";
import MergeSortDisplay from "./Algos/MergeSort";
import InsertionSortDisplay from "./Algos/InsertionSort";
import SelectionSortDisplay from "./Algos/SelectionSort";
import HeapSortDisplay from "./Algos/HeapSort";

function Body() {
  const [show, setShow] = useState(() => {
    return 1;
  });

  const ToggleSwitch = (index) => {
    setShow(index);
  };

  return (
    <div className="algoBody">
      <div className="displayButton">
        <button
          type="button"
          className="btn btn-success"
          onClick={() => ToggleSwitch(1)}
        >
          Bubble Sort
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => ToggleSwitch(2)}
        >
          Quick Sort
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => ToggleSwitch(3)}
        >
          Merge Sort
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => ToggleSwitch(4)}
        >
          Insertion Sort
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => ToggleSwitch(5)}
        >
          Selection Sort
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => ToggleSwitch(6)}
        >
          Heap Sort
        </button>
      </div>
      <div className="currentAlgo">
        <div className={show === 1 ? "active-algo" : "algo"}>
          <React.Fragment>
            <BubbleSortDisplay />
          </React.Fragment>
        </div>

        <div className={show === 2 ? "active-algo" : "algo"}>
          <React.Fragment>
            <QuickSortDisplay />
          </React.Fragment>
        </div>
        <div className={show === 3 ? "active-algo" : "algo"}>
          <React.Fragment>
            <MergeSortDisplay />
          </React.Fragment>
        </div>

        <div className={show === 4 ? "active-algo" : "algo"}>
          <React.Fragment>
            <InsertionSortDisplay />
          </React.Fragment>
        </div>
        <div className={show === 5 ? "active-algo" : "algo"}>
          <React.Fragment>
            <SelectionSortDisplay />
          </React.Fragment>
        </div>

        <div className={show === 6 ? "active-algo" : "algo"}>
          <React.Fragment>
            <HeapSortDisplay />
          </React.Fragment>
        </div>
      </div>
      <div className="algoCode">CODEBLOCK</div>
    </div>
  );
}

export default Body;
