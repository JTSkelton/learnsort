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

function BubbleSortDisplay() {
  const [arrValues, setArrValues] = useState(RandomArr());
  const [sortedArrValues, setSorted] = useState([]);
  const [canvas, setCanvas] = useState(
    <Canvas array={[...arrValues]} draw={Draw} height={200} width={400} />
  );

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
      <Canvas array={[...array]} draw={Draw} height={200} width={400} />
    );
  }

  const drawSorted = (context) => {
    const arr = [...arrValues];
    var grd = context.createLinearGradient(0, 400, 400, 0);
    const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const loop = async () => {
      for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
          console.log(j);
          if (arr[j] >= arr[j + 1]) {
            context.clearRect(j * 10, 0, 8, 150);
            context.clearRect((j + 1) * 10, 0, 8, 150);

            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

            context.fillStyle = "#00bc8c";
            context.fillRect(
              (j + 1) * 10,
              150 - 10 * arr[j + 1],
              8,
              10 * arr[j + 1]
            );

            context.fillStyle = "#f39c12";
            context.fillRect(j * 10, 150 - 10 * arr[j], 8, 10 * arr[j]);

            grd = context.createLinearGradient(0, 400, 400, 0);
            grd.addColorStop(0, "black");
            grd.addColorStop(1, "white");
            context.fillStyle = grd;
            context.fillRect(
              (j - 1) * 10,
              150 - 10 * arr[j - 1],
              8,
              10 * arr[j - 1]
            );

            await wait(200);
          } else if (arr[j] < arr[j + 1]) {
            context.fillStyle = "#00bc8c";
            context.fillRect(
              (j + 1) * 10,
              150 - 10 * arr[j + 1],
              8,
              10 * arr[j + 1]
            );

            grd = context.createLinearGradient(0, 400, 400, 0);
            grd.addColorStop(0, "black");
            grd.addColorStop(1, "white");
            context.fillStyle = grd;
            context.fillRect(
              (j - 1) * 10,
              150 - 10 * arr[j - 1],
              8,
              10 * arr[j - 1]
            );

            grd = context.createLinearGradient(0, 400, 400, 0);
            grd.addColorStop(0, "black");
            grd.addColorStop(1, "white");
            context.fillStyle = grd;
            context.fillRect(j * 10, 150 - 10 * arr[j], 8, 10 * arr[j]);
          }
          if (j === arr.length - 2 - i) {
            context.clearRect(j * 10, 0, 8, 150);
            grd = context.createLinearGradient(0, 400, 400, 0);
            grd.addColorStop(0, "black");
            grd.addColorStop(1, "white");
            context.fillStyle = grd;
            context.fillRect(j * 10, 150 - 10 * arr[j], 8, 10 * arr[j]);
          }
          if (arr.length - 1 - i === 1) {
            context.clearRect(j * 10, 0, 8, 150);
            context.fillStyle = "#00bc8c";
            context.fillRect(j * 10, 150 - 10 * arr[j], 8, 10 * arr[j]);
          }
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
      </div>
    </div>
  );
}

export default BubbleSortDisplay;
