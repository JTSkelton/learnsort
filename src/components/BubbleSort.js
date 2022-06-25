import RandomArr from "./RandomArr";
import React, { useState } from "react";

function bubSort(arr) {
  arr.map((e1) =>
    arr.map((e2, i) => {
      if (arr[i] > arr[i + 1]) {
        arr[i] = arr[i + 1];
        arr[i + 1] = e2;
      }
    })
  );
  return arr;
}

function BubbleSort() {
  const [arrValues, setArrValues] = useState(() => {
    return RandomArr();
  });
  const [sortedArrValues, setSortedArrValues] = useState(() => {
    return "";
  });

  function sortThatArray() {
    setSortedArrValues(bubSort(arrValues));
  }

  function newArray() {
    setArrValues(RandomArr());
  }

  return (
    <div className="BubbleSort">
      <div className="card text-white bg-secondary mb-3">
        <div className="card-header">Bubble Sort</div>
        <div className="card-body">
          <button type="button" className="btn btn-success" onClick={newArray}>
            Generate New Array
          </button>
          <br></br>
          <br></br>
          <button
            type="button"
            className="btn btn-success"
            onClick={sortThatArray}
          >
            Bubble Sort The Array
          </button>
          <br></br>
          <span>Origional Array: {arrValues}</span>
          <br></br>
          <span>Bubble Sorted Array: {sortedArrValues}</span>
        </div>
      </div>
    </div>
  );
}

export default BubbleSort;
