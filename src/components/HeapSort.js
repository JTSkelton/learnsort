import RandomArr from "./RandomArr";
import React, { useState } from "react";

function HeapSort(arr) {
  return arr;
}

function HeapSortDisplay() {
  const [arrValues, setArrValues] = useState(() => {
    return RandomArr();
  });
  const [sortedArrValues, setSortedArrValues] = useState(() => {
    return "";
  });

  function sortThatArray() {
    setSortedArrValues(HeapSort(arrValues));
  }

  function newArray() {
    setArrValues(RandomArr());
  }

  return (
    <div className="HeapSort">
      <div className="card text-white bg-secondary mb-3">
        <div className="card-header">Heap Sort</div>
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
            Heap Sort The Array
          </button>
          <br></br>
          <span>Origional Array: {arrValues}</span>
          <br></br>
          <span>Heap Sorted Array: {sortedArrValues}</span>
        </div>
      </div>
    </div>
  );
}

export default HeapSortDisplay;
