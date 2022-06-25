import RandomArr from "./RandomArr";
import React, { useState } from "react";

function quickSort(origArray) {
  if (origArray.length <= 1) {
    return origArray;
  } else {
    var left = [];
    var right = [];
    var pivot = origArray.pop();

    for (var i = 0; i < origArray.length; i++) {
      if (origArray[i] < pivot) {
        left.push(origArray[i]);
      } else {
        right.push(origArray[i]);
      }
    }
    var newArray = [...quickSort(left), pivot, ...quickSort(right)];
    return newArray;
  }
}

function QuickSortDisplay() {
  const [arrValues, setArrValues] = useState(() => {
    return RandomArr();
  });
  const [sortedArrValues, setSortedArrValues] = useState(() => {
    return "";
  });

  function sortThatArray() {
    setSortedArrValues(quickSort(arrValues));
  }

  function newArray() {
    setArrValues(RandomArr());
  }

  return (
    <div className="QuickSort">
      <div className="card text-white bg-secondary mb-3">
        <div className="card-header">Quick Sort</div>
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
            Quick Sort The Array
          </button>
          <br></br>
          <span>Origional Array: {arrValues}</span>
          <br></br>
          <span>Quick Sorted Array: {sortedArrValues}</span>
        </div>
      </div>
    </div>
  );
}

export default QuickSortDisplay;
