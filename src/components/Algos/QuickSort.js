import RandomArr from "./RandomArr";
import React, { useState } from "react";

function quickSort(origArray) {
  if (origArray.length <= 1) return origArray;

  var leftArray = [];
  var rightArray = [];
  var pivot = origArray[origArray.length - 1];

  for (var i = 0; i < origArray.length - 1; i++) {
    if (origArray[i] < pivot) {
      leftArray.push(origArray[i]);
    } else {
      rightArray.push(origArray[i]);
    }
  }
  var newArray = [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
  return newArray;
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
  );
}

export default QuickSortDisplay;
