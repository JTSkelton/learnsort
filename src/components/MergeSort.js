import RandomArr from "./RandomArr";
import React, { useState } from "react";

function mergeSort(arr) {
  const half = arr.length / 2;

  // the base case is array length <=1
  if (arr.length <= 1) {
    return arr;
  }

  const left = arr.splice(0, half); // the first half of the array
  const right = arr;
  var merge = [...mergeSort(left), ...mergeSort(right)];
  return merge;
}

function MergeSort() {
  const [arrValues, setArrValues] = useState(() => {
    return RandomArr();
  });
  const [sortedArrValues, setSortedArrValues] = useState(() => {
    return "";
  });

  function sortThatArray() {
    setSortedArrValues(mergeSort(arrValues));
  }

  function newArray() {
    setArrValues(RandomArr());
  }

  return (
    <div className="MergeSort">
      <div className="card text-white bg-secondary mb-3">
        <div className="card-header">Merge Sort</div>
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
            Merge Sort The Array
          </button>
          <br></br>
          <span>Origional Array: {arrValues}</span>
          <br></br>
          <span>Merge Sorted Array: {sortedArrValues}</span>
        </div>
      </div>
    </div>
  );
}

export default MergeSort;
