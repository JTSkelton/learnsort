import RandomArr from "../FunctionsForAll/RandomArr";
import React, { useState } from "react";
import Canvas from "../FunctionsForAll/Canvas";
import Draw from "../FunctionsForAll/DrawArray";

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

let waitForPressResolve = true;
function waitForPress() {
  return new Promise((resolve) => (waitForPressResolve = resolve));
}

function btnResolver() {
  if (waitForPressResolve) waitForPressResolve();
}

function SelectionSortDisplay() {
  const [arrValues, setArrValues] = useState(RandomArr(10));
  const [sortedArrValues, setSorted] = useState([]);
  const [canvas, setCanvas] = useState(
    <Canvas array={[...arrValues]} draw={Draw} height={300} width={600} />
  );

  function SortThatArray() {
    const array = [...arrValues];
    setSorted(SelectionSort(array, array.length));
    setCanvas(<Canvas draw={drawSorted} height={300} width={600} />);
  }

  function NewArray() {
    const array = RandomArr(10);
    setArrValues(array);
    setSorted(" ");
    setCanvas(
      <Canvas array={[...array]} draw={Draw} height={300} width={600} />
    );
  }

  const drawSorted = async (context) => {
    const arr = [...arrValues];
    const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    for (let i = 0; i < arr.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }

        context.clearRect(j * 60, 0, 58, 300);
        context.fillStyle = "#00bc8c";
        context.fillRect(j * 60, 300 - 30 * arr[j], 58, 30 * arr[j]);

        context.clearRect((j - 1) * 60, 0, 58, 300);
        context.fillStyle = "#adb5bd";
        context.fillRect(
          (j - 1) * 60,
          300 - 30 * arr[j - 1],
          58,
          30 * arr[j - 1]
        );
        await wait(300);
      }
      // await waitForPress();
      if (arr[i] > arr[minIndex]) {
        context.clearRect(minIndex * 60, 0, 58, 300);
        context.fillStyle = "#e74c3c";
        context.fillRect(
          minIndex * 60,
          300 - 30 * arr[minIndex],
          58,
          30 * arr[minIndex]
        );
        context.clearRect(i * 60, 0, 58, 300);
        context.fillStyle = "#e74c3c";
        context.fillRect(i * 60, 300 - 30 * arr[i], 58, 30 * arr[i]);
        await waitForPress();
      }

      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      context.clearRect(minIndex * 60, 0, 58, 300);
      context.fillStyle = "#00bc8c";
      context.fillRect(
        minIndex * 60,
        300 - 30 * arr[minIndex],
        58,
        30 * arr[minIndex]
      );
      context.clearRect(i * 60, 0, 58, 300);
      context.fillStyle = "#00bc8c";
      context.fillRect(i * 60, 300 - 30 * arr[i], 58, 30 * arr[i]);
      await waitForPress();
    }
  };

  return (
    <div className="stepSortBody">
      <div className="card-body">
        <button type="button" className="btn btn-success" onClick={NewArray}>
          New Array
        </button>

        <span>Unsorted Array: {arrValues}</span>

        <button
          type="button"
          className="btn btn-success"
          onClick={SortThatArray}
        >
          Start
        </button>
        <span>Sorted Array: {sortedArrValues}</span>
        <span>{canvas}</span>
        <button
          id="next"
          type="button"
          className="btn btn-success"
          onClick={btnResolver}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default SelectionSortDisplay;
