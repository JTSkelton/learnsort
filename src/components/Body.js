import React, { useState } from "react";
import BubbleSortDisplay from "./Algos/BubbleSort/BubbleSort";
import QuickSortDisplay from "./Algos/QuickSort";
import "../App.css";
import MergeSortDisplay from "./Algos/MergeSort/MergeSort";
import MergeSortDisplayFast from "./Algos/MergeSort/FastMergeSort";
import InsertionSortDisplay from "./Algos/InsertionSort/InsertionSort";
import SelectionSortDisplay from "./Algos/SelectionSort/SelectionSort";
import HeapSortDisplay from "./Algos/HeapSort";
import BubbleSortDisplayFast from "./Algos/BubbleSort/FastBubbleSort";
import InsertionSortDisplayFast from "./Algos/InsertionSort/FastInsertionSort";
import SelectionSortDisplayFast from "./Algos/SelectionSort/FastSelectionSort";

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
        {/* <button
          type="button"
          className="btn btn-success"
          onClick={() => ToggleSwitch(6)}
        >
          Heap Sort
        </button> */}
      </div>

      <div className="currentAlgoHeader">
        <div className={show === 1 ? "active-algo" : "algo"}>
          Bubble Sort
          <div butt>
            <button
              type="button"
              className="btn btn-outline-success"
              onClick={() => ToggleSwitch(7)}
            >
              Sort Fast
            </button>
          </div>
        </div>

        <div className={show === 7 ? "active-algo" : "algo"}>
          Bubble Sort Fast
          <div butt>
            <button
              type="button"
              className="btn btn-outline-success"
              onClick={() => ToggleSwitch(1)}
            >
              Sort Slow
            </button>
          </div>
        </div>

        <div className={show === 2 ? "active-algo" : "algo"}>Quick Sort</div>

        <div className={show === 3 ? "active-algo" : "algo"}>
          Merge Sort
          <div butt>
            <button
              type="button"
              className="btn btn-outline-success"
              onClick={() => ToggleSwitch(9)}
            >
              Sort Fast
            </button>
          </div>
        </div>

        <div className={show === 4 ? "active-algo" : "algo"}>
          Insertion Sort
          <div butt>
            <button
              type="button"
              className="btn btn-outline-success"
              onClick={() => ToggleSwitch(10)}
            >
              Sort Fast
            </button>
          </div>
        </div>

        <div className={show === 10 ? "active-algo" : "algo"}>
          Insertion Sort Fast
          <div butt>
            <button
              type="button"
              className="btn btn-outline-success"
              onClick={() => ToggleSwitch(4)}
            >
              Sort Slow
            </button>
          </div>
        </div>

        <div className={show === 5 ? "active-algo" : "algo"}>
          Selection Sort
          <div butt>
            <button
              type="button"
              className="btn btn-outline-success"
              onClick={() => ToggleSwitch(11)}
            >
              Sort Fast
            </button>
          </div>
        </div>

        <div className={show === 11 ? "active-algo" : "algo"}>
          Selection Sort
          <div butt>
            <button
              type="button"
              className="btn btn-outline-success"
              onClick={() => ToggleSwitch(5)}
            >
              Sort Slow
            </button>
          </div>
        </div>

        <div className={show === 6 ? "active-algo" : "algo"}>Heap Sort</div>

        <div className={show === 9 ? "active-algo" : "algo"}>
          Merge Sort
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={() => ToggleSwitch(3)}
          >
            Merge Sort Slow
          </button>
        </div>
      </div>

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

      <div className={show === 7 ? "active-algo-fast" : "algo"}>
        <React.Fragment>
          <BubbleSortDisplayFast />
        </React.Fragment>
      </div>

      <div className={show === 9 ? "active-algo-fast" : "algo"}>
        <React.Fragment>
          <MergeSortDisplayFast />
        </React.Fragment>
      </div>

      <div className={show === 10 ? "active-algo-fast" : "algo"}>
        <React.Fragment>
          <InsertionSortDisplayFast />
        </React.Fragment>
      </div>

      <div className={show === 11 ? "active-algo-fast" : "algo"}>
        <React.Fragment>
          <SelectionSortDisplayFast />
        </React.Fragment>
      </div>

      <div className="activeAlgoCode">
        <div className={show === 1 ? "active-algo" : "algo"}>
          <pre>
            <code className="javascript-html">
              {`
  function BubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  }
              `}
            </code>
          </pre>
        </div>
        <div className={show === 2 ? "active-algo" : "algo"}>
          <pre>
            <code className="javascript-html">
              {`
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
              `}
            </code>
          </pre>
        </div>
        <div className={show === 3 ? "active-algo" : "algo"}>
          <pre>
            <code className="javascript-html">
              {`
  const mergeSort = (array) => {
    if (array.length <= 1) {
      return array;
    }
    const middleIndex = Math.floor(array.length / 2);
    const leftArray = array.slice(0, middleIndex);
    const rightArray = array.slice(middleIndex);
    return merge(mergeSort(leftArray), mergeSort(rightArray));
  };
  
  const merge = (leftArr, rightArr) => {
    const output = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
      const leftElement = leftArr[leftIndex];
      const rightElement = rightArr[rightIndex];
      if (leftElement < rightElement) {
        output.push(leftElement);
        leftIndex++;
      } else {
        output.push(rightElement);
        rightIndex++;
      }
    }
    return [
      ...output,
      ...leftArr.slice(leftIndex),
      ...rightArr.slice(rightIndex),
    ];
  };
              `}
            </code>
          </pre>
        </div>
        <div className={show === 4 ? "active-algo" : "algo"}>
          <pre>
            <code className="javascript-html">
              {`
  function InsertionSort(arr, n) {
    let i, key, j;
    for (i = 1; i < n; i++) {
      key = arr[i];
      j = i - 1;
  
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      arr[j + 1] = key;
      console.log(arr);
    }
  
    return arr;
  }
              `}
            </code>
          </pre>
        </div>
        <div className={show === 5 ? "active-algo" : "algo"}>
          <pre>
            <code className="javascript-html">
              {`
  function SelectionSort(array) {
    const arr = array.map((x) => {
      return x;
    });
    for (let i = 0; i < arr.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
  }
              `}
            </code>
          </pre>
        </div>
        <div className={show === 6 ? "active-algo" : "algo"}>
          <pre>
            <code className="javascript-html">
              {`
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
              `}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}

export default Body;
