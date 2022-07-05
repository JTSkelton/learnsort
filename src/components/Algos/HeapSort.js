import RandomArr from "./FunctionsForAll/RandomArr";
import React, { useState } from "react";

function HeapSort(arr) {
  for (var i = Math.floor(arr.length / 2) - 1; i >= 0; i--)
    heapify(arr, arr.length, i);

  for (var j = arr.length - 1; j > 0; j--) {
    var temp = arr[0];
    arr[0] = arr[j];
    arr[j] = temp;
    heapify(arr, j, 0);
  }
  return arr;
}

function heapify(arr, arrLength, i) {
  var largest = i;
  var left = 2 * i + 1;
  var right = 2 * i + 2;

  if (left < arrLength && arr[left] > arr[largest]) largest = left;

  if (right < arrLength && arr[right] > arr[largest]) largest = right;

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];

    heapify(arr, arrLength, largest);
  }
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
  );
}

export default HeapSortDisplay;
