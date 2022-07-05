import Canvas from "../FunctionsForAll/Canvas";
import React, { useState } from "react";
import RandomArr from "../FunctionsForAll/RandomArr";
import Draw from "../FunctionsForAll/DrawArray";

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

function BubbleSortDisplayFast() {
  const [arrValues, setArrValues] = useState(RandomArr(60));
  const [sortedArrValues, setSorted] = useState([]);
  const [canvas, setCanvas] = useState(
    <Canvas array={[...arrValues]} draw={Draw} height={600} width={1000} />
  );

  function SortThatArray() {
    const array = [...arrValues];
    setSorted(BubbleSort(array));
    setCanvas(<Canvas draw={drawSorted} height={600} width={1000} />);
  }

  function NewArray() {
    const array = RandomArr(60);
    setArrValues(array);
    setSorted(" ");
    setCanvas(
      <Canvas array={[...array]} draw={Draw} height={600} width={1000} />
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

            context.fillStyle = "#e74c3c";
            context.fillRect(
              (j + 1) * 10,
              150 - 10 * arr[j + 1],
              8,
              10 * arr[j + 1]
            );
            context.clearRect(j * 10, 0, 8, 150);

            context.fillStyle = "#e74c3c";
            context.fillRect(j * 10, 150 - 10 * arr[j], 8, 10 * arr[j]);

            context.clearRect((j - 1) * 10, 0, 8, 150);

            context.fillStyle = "#adb5bd";
            context.fillRect(
              (j - 1) * 10,
              150 - 10 * arr[j - 1],
              8,
              10 * arr[j - 1]
            );

            await wait(200);

            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

            let x = (j + 1) * 10;
            let xx = j * 10;
            let dx = 1;
            function animate() {
              context.clearRect((j - 1) * 10, 0, 10, 150);
              context.fillStyle = "#adb5bd";
              context.fillRect(
                (j - 1) * 10,
                150 - 10 * arr[j - 1],
                8,
                10 * arr[j - 1]
              );
              context.clearRect(j * 10, 0, 10, 150);

              context.fillStyle = "#f39c12";
              context.fillRect(x, 150 - 10 * arr[j], 8, 10 * arr[j]);
              context.clearRect((j + 1) * 10, 0, 8, 150);

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

            context.fillStyle = "#00bc8c";
            context.fillRect(
              (j + 1) * 10,
              150 - 10 * arr[j + 1],
              8,
              10 * arr[j + 1]
            );
            context.clearRect((j - 1) * 10, 0, 8, 150);

            context.fillStyle = "#adb5bd";
            context.fillRect(
              (j - 1) * 10,
              150 - 10 * arr[j - 1],
              8,
              10 * arr[j - 1]
            );
            context.clearRect(j * 10, 0, 8, 150);

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
          await wait(200);
        }
      }
    };
    loop();
  };

  return (
    <div className="bubbleSortFast">
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
          Begin Sort
        </button>

        <span>Sorted Array: {sortedArrValues}</span>
        <span>{canvas}</span>
      </div>
    </div>
  );
}

export default BubbleSortDisplayFast;
