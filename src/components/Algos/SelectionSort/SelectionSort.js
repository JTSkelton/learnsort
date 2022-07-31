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
      }
      if (arr[i] < arr[minIndex]) {
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
        await wait(200);
        await waitForPress();
      }
      context.clearRect(minIndex * 60, 0, 58, 300);
      context.fillStyle = "#f39c12";
      context.fillRect(
        minIndex * 60,
        300 - 30 * arr[minIndex],
        58,
        30 * arr[minIndex]
      );
      context.clearRect(i * 60, 0, 58, 300);
      context.fillStyle = "#00bc8c";
      context.fillRect(i * 60, 300 - 30 * arr[i], 58, 30 * arr[i]);
      await wait(300);

      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      context.clearRect(minIndex * 60, 0, 58, 300);
      context.fillStyle = "#f39c12";
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
      // let x = minIndex * 60;
      // let xx = i * 60;
      // let dx = 1;
      // eslint-disable-next-line no-loop-func
      // function animateBubble() {
      //   context.clearRect(i * 60, 0, 60, 300);
      //   context.fillStyle = "#f39c12";
      //   context.fillRect(x, 300 - 30 * arr[i], 58, 30 * arr[i]);

      //   context.clearRect(minIndex * 60, 0, 58, 300);
      //   context.fillStyle = "#00bc8c";
      //   context.fillRect(xx, 300 - 30 * arr[minIndex], 58, 30 * arr[minIndex]);

      //   if (x + 60 === minIndex * 60) {
      //     return;
      //   }
      //   x -= dx;
      //   xx += dx;
      //   requestAnimationFrame(animateBubble);
      // }
      // animateBubble();
      // await wait(500);
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
