import RandomArr from "../FunctionsForAll/RandomArr";
import React, { useState } from "react";
import Canvas from "../FunctionsForAll/Canvas";
import Draw from "../FunctionsForAll/DrawArray";

export function BubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
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

function BubbleSortDisplay() {
  const [arrValues, setArrValues] = useState(RandomArr(10));
  const [sortedArrValues, setSorted] = useState([]);
  const [canvas, setCanvas] = useState(
    <Canvas array={[...arrValues]} draw={Draw} height={300} width={600} />
  );

  function SortThatArray() {
    const array = [...arrValues];
    setSorted(BubbleSort(array));
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
      for (let j = 0; j < arr.length - 1 - i; j++) {
        console.log(j);
        if (arr[j] > arr[j + 1]) {
          context.clearRect((j + 1) * 60, 0, 58, 300);
          context.fillStyle = "#e74c3c";
          context.fillRect(
            (j + 1) * 60,
            300 - 30 * arr[j + 1],
            58,
            30 * arr[j + 1]
          );

          context.clearRect(j * 60, 0, 58, 300);
          context.fillStyle = "#e74c3c";
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

          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

          let x = (j + 1) * 60;
          let xx = j * 60;
          let dx = 1;
          function animateBubble() {
            context.clearRect((j - 1) * 60, 0, 60, 300);
            context.fillStyle = "#adb5bd";
            context.fillRect(
              (j - 1) * 60,
              300 - 30 * arr[j - 1],
              58,
              30 * arr[j - 1]
            );

            context.clearRect(j * 60, 0, 60, 300);
            context.fillStyle = "#f39c12";
            context.fillRect(x, 300 - 30 * arr[j], 58, 30 * arr[j]);

            context.clearRect((j + 1) * 60, 0, 58, 300);
            context.fillStyle = "#00bc8c";
            context.fillRect(xx, 300 - 30 * arr[j + 1], 58, 30 * arr[j + 1]);

            if (x + 60 === (j + 1) * 60) {
              return;
            }
            x -= dx;
            xx += dx;
            requestAnimationFrame(animateBubble);
          }
          animateBubble();
          await wait(500);
        } else if (arr[j] <= arr[j + 1]) {
          context.clearRect((j + 1) * 60, 0, 58, 300);
          context.fillStyle = "#00bc8c";
          context.fillRect(
            (j + 1) * 60,
            300 - 30 * arr[j + 1],
            58,
            30 * arr[j + 1]
          );

          context.clearRect((j - 1) * 60, 0, 58, 300);
          context.fillStyle = "#adb5bd";
          context.fillRect(
            (j - 1) * 60,
            300 - 30 * arr[j - 1],
            58,
            30 * arr[j - 1]
          );

          context.clearRect(j * 60, 0, 58, 300);
          context.fillStyle = "#f39c12";
          context.fillRect(j * 60, 300 - 30 * arr[j], 58, 30 * arr[j]);
        }
        if (j === arr.length - 2 - i) {
          console.log("here");
          context.clearRect(j * 60, 0, 58, 300);
          context.fillStyle = "#adb5bd";
          context.fillRect(j * 60, 300 - 30 * arr[j], 58, 30 * arr[j]);
        }
        if (arr.length - 1 - i === 1) {
          context.clearRect(j * 60, 0, 58, 300);
          context.fillStyle = "#00bc8c";
          context.fillRect(j * 60, 300 - 30 * arr[j], 58, 30 * arr[j]);
        }
        await wait(200);
        await waitForPress();
      }
    }
  };

  return (
    <div className="bubbleSort">
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

export default BubbleSortDisplay;
