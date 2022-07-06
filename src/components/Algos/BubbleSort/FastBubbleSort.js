import Canvas from "../FunctionsForAll/Canvas";
import React, { useState } from "react";
import RandomArr from "../FunctionsForAll/RandomArr";
import DrawFast from "../FunctionsForAll/DrawFastArray";

function BubbleSortDisplayFast() {
  const [arrValues, setArrValues] = useState(RandomArr(100));
  const [canvas, setCanvas] = useState(
    <Canvas array={[...arrValues]} draw={DrawFast} height={600} width={1000} />
  );

  function SortThatArray() {
    setCanvas(<Canvas draw={drawSorted} height={600} width={1000} />);
  }

  function NewArray() {
    const array = RandomArr(100);
    setArrValues(array);
    setCanvas(
      <Canvas array={[...array]} draw={DrawFast} height={600} width={1000} />
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
            // context.clearRect((j + 1) * 10, 0, 8, 600);
            // context.fillStyle = "#e74c3c";
            // context.fillRect(
            //   (j + 1) * 10,
            //   600 - 50 * arr[j + 1],
            //   8,
            //   50 * arr[j + 1]
            // );
            // context.clearRect(j * 10, 0, 8, 600);
            // context.fillStyle = "#e74c3c";
            // context.fillRect(j * 10, 600 - 50 * arr[j], 8, 50 * arr[j]);

            // context.clearRect((j - 1) * 10, 0, 8, 600);
            // context.fillStyle = "#adb5bd";
            // context.fillRect(
            //   (j - 1) * 10,
            //   600 - 50 * arr[j - 1],
            //   8,
            //   50 * arr[j - 1]
            // );

            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            context.clearRect((j + 1) * 10, 0, 8, 600);
            context.fillStyle = "#00bc8c";
            context.fillRect(
              (j + 1) * 10,
              600 - 50 * arr[j + 1],
              8,
              50 * arr[j + 1]
            );
            context.clearRect(j * 10, 0, 8, 600);
            context.fillStyle = "#f39c12";
            context.fillRect(j * 10, 600 - 50 * arr[j], 8, 50 * arr[j]);

            context.clearRect((j - 1) * 10, 0, 8, 600);
            context.fillStyle = "#adb5bd";
            context.fillRect(
              (j - 1) * 10,
              600 - 50 * arr[j - 1],
              8,
              50 * arr[j - 1]
            );
          } else if (arr[j] <= arr[j + 1]) {
            context.clearRect((j + 1) * 10, 0, 8, 600);
            context.fillStyle = "#00bc8c";
            context.fillRect(
              (j + 1) * 10,
              600 - 50 * arr[j + 1],
              8,
              50 * arr[j + 1]
            );

            context.clearRect((j - 1) * 10, 0, 8, 600);
            context.fillStyle = "#adb5bd";
            context.fillRect(
              (j - 1) * 10,
              600 - 50 * arr[j - 1],
              8,
              50 * arr[j - 1]
            );

            context.clearRect(j * 10, 0, 8, 600);
            context.fillStyle = "#f39c12";
            context.fillRect(j * 10, 600 - 50 * arr[j], 8, 50 * arr[j]);
          }
          if (j === arr.length - 2 - i) {
            context.clearRect(j * 10, 0, 8, 600);
            context.fillStyle = "#adb5bd";
            context.fillRect(j * 10, 600 - 50 * arr[j], 8, 50 * arr[j]);
          }
          if (arr.length - 1 - i === 1) {
            context.clearRect(j * 10, 0, 8, 600);
            context.fillStyle = "#00bc8c";
            context.fillRect(j * 10, 600 - 50 * arr[j], 8, 50 * arr[j]);
          }
          await wait(10);
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

        <button
          type="button"
          className="btn btn-success"
          onClick={SortThatArray}
        >
          Begin Sort
        </button>

        <span>{canvas}</span>
      </div>
    </div>
  );
}

export default BubbleSortDisplayFast;
