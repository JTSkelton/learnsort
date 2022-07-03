import RandomArr from "./RandomArr";
import React, { useState } from "react";
import Canvas from "../Canvas";
import Draw from "./DrawArray";

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

let waitForPressResolve = true;
function waitForPress() {
  return new Promise((resolve) => (waitForPressResolve = resolve));
}

function btnResolver() {
  if (waitForPressResolve) waitForPressResolve();
}

function BubbleSortDisplay() {
  const [show, setShow] = useState(() => {
    return 1;
  });
  const [arrValues, setArrValues] = useState(RandomArr());
  const [sortedArrValues, setSorted] = useState([]);
  const [canvas, setCanvas] = useState(
    <Canvas array={[...arrValues]} draw={Draw} height={200} width={400} />
  );

  const ToggleSwitch = (index) => {
    setShow(index);
  };

  function SortThatArray() {
    const array = [...arrValues];
    setSorted(BubbleSort(array));
    setCanvas(<Canvas draw={drawSorted} height={200} width={400} />);
  }

  function NewArray() {
    const array = RandomArr();
    setArrValues(array);
    setSorted(" ");
    setCanvas(
      <Canvas array={[...array]} draw={Draw} height={200} width={100} />
    );
  }

  const drawSorted = async (context) => {
    const arr = [...arrValues];
    const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const loop = async () => {
      for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
          console.log(j);
          if (arr[j] > arr[j + 1]) {
            context.clearRect(j * 10, 0, 8, 150);
            context.clearRect((j + 1) * 10, 0, 8, 150);
            context.beginPath();
            context.fillStyle = "#e74c3c";
            context.fillRect(
              (j + 1) * 10,
              150 - 10 * arr[j + 1],
              8,
              10 * arr[j + 1]
            );
            context.clearRect(j * 10, 0, 8, 150);
            context.beginPath();
            context.fillStyle = "#e74c3c";
            context.fillRect(j * 10, 150 - 10 * arr[j], 8, 10 * arr[j]);

            context.clearRect((j - 1) * 10, 0, 8, 150);
            context.beginPath();
            context.fillStyle = "#adb5bd";
            context.fillRect(
              (j - 1) * 10,
              150 - 10 * arr[j - 1],
              8,
              10 * arr[j - 1]
            );

            await wait(800);

            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

            let x = (j + 1) * 10;
            let xx = j * 10;
            let dx = 0.25;
            function animate() {
              context.fillStyle = "#adb5bd";
              context.fillRect(
                (j - 1) * 10,
                150 - 10 * arr[j - 1],
                8,
                10 * arr[j - 1]
              );

              context.clearRect(j * 10, 0, 10, 150);
              context.beginPath();
              context.fillStyle = "#f39c12";
              context.fillRect(x, 150 - 10 * arr[j], 8, 10 * arr[j]);
              context.clearRect((j + 1) * 10, 0, 8, 150);
              context.beginPath();
              context.fillStyle = "#00bc8c";
              context.fillRect(xx, 150 - 10 * arr[j + 1], 8, 10 * arr[j + 1]);

              if (x + 10 === (j + 1) * 10) {
                return;
              }
              x -= dx;
              xx += dx;
              requestAnimationFrame(animate);
            }

            animate();
          } else if (arr[j] <= arr[j + 1]) {
            context.clearRect((j + 1) * 10, 0, 8, 150);
            context.beginPath();
            context.fillStyle = "#00bc8c";
            context.fillRect(
              (j + 1) * 10,
              150 - 10 * arr[j + 1],
              8,
              10 * arr[j + 1]
            );
            context.clearRect((j - 1) * 10, 0, 8, 150);
            context.beginPath();
            context.fillStyle = "#adb5bd";
            context.fillRect(
              (j - 1) * 10,
              150 - 10 * arr[j - 1],
              8,
              10 * arr[j - 1]
            );
            context.clearRect(j * 10, 0, 8, 150);
            context.beginPath();
            context.fillStyle = "#f39c12";
            context.fillRect(j * 10, 150 - 10 * arr[j], 8, 10 * arr[j]);
          }
          if (j === arr.length - 2 - i) {
            context.clearRect(j * 10, 0, 8, 150);
            context.fillStyle = "#adb5bd";
            context.fillRect(j * 10, 150 - 10 * arr[j], 8, 10 * arr[j]);
          }
          if (arr.length - 1 - i === 1) {
            context.clearRect(j * 10, 0, 8, 150);
            context.fillStyle = "#00bc8c";
            context.fillRect(j * 10, 150 - 10 * arr[j], 8, 10 * arr[j]);
          }

          await waitForPress();
        }
      }
    };
    loop();
  };

  return (
    <div className="bubbleSort">
      <div className="card-header">Bubble Sort</div>
      <div className="card-body">
        <button type="button" className="btn btn-success" onClick={NewArray}>
          Generate New Array
        </button>
        <br></br>
        <span>Unsorted Array: {arrValues}</span>
        <br></br>
        <br></br>
        <button
          type="button"
          className="btn btn-success"
          onClick={SortThatArray}
        >
          Bubble Sort The Array
        </button>
        <br></br>
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
