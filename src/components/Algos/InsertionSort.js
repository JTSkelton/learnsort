import RandomArr from "./FunctionsForAll/RandomArr";
import React, { useState } from "react";

function InsertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        const tempValue = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = tempValue;
      } else break;
    }
  }
  return arr;
}

function InsertionSortDisplay() {
  const [arrValues, setArrValues] = useState(() => {
    return RandomArr();
  });
  const [sortedArrValues, setSortedArrValues] = useState(() => {
    return "";
  });

  function sortThatArray() {
    setSortedArrValues(InsertionSort(arrValues));
  }

  function newArray() {
    setArrValues(RandomArr(10));
  }

  return (
    <div className="InsertionSort">
      <div className="card-header">Insertion Sort</div>
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
          Insertion Sort The Array
        </button>
        <br></br>
        <span>Origional Array: {arrValues}</span>
        <br></br>
        <span>Insertion Sorted Array: {sortedArrValues}</span>
      </div>
    </div>
  );
}

export default InsertionSortDisplay;
