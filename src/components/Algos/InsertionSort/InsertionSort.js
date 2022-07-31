import RandomArr from "../FunctionsForAll/RandomArr";
import React, { useState } from "react";
import Canvas from "../FunctionsForAll/Canvas";
import Draw from "../FunctionsForAll/DrawArray";

function InsertionSort(arr, n) {
  let i, key, j;
  for (i = 1; i < n; i++) {
    key = arr[i];
    j = i - 1;

    while (j >= 0 && arr[j] > key) {
      console.log("Pre " + arr);
      console.log("Pre j " + arr[j]);

      console.log("Pre +1 " + arr[j + 1]);

      arr[j + 1] = arr[j];
      console.log("Post " + arr);
      console.log("Post j " + arr[j]);
      console.log("Post +1 " + arr[j + 1]);

      j = j - 1;
    }
    arr[j + 1] = key;
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

function InsertionSortDisplay() {
  const [arrValues, setArrValues] = useState(RandomArr(10));
  const [sortedArrValues, setSorted] = useState([]);
  const [canvas, setCanvas] = useState(
    <Canvas array={[...arrValues]} draw={Draw} height={300} width={600} />
  );

  function SortThatArray() {
    const array = [...arrValues];
    setSorted(InsertionSort(array, array.length));
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
    const n = arr.length;
    const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    let i, key, j;
    for (i = 1; i < n; i++) {
      key = arr[i];
      j = i - 1;

      while (j >= 0 && arr[j] > key) {
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
          await waitForPress();
        }
        //PRE

        //POST
        arr[j + 1] = arr[j];
        j = j - 1;
        context.clearRect((j + 1) * 60, 0, 58, 300);
        context.fillStyle = "#00bc8c";
        context.fillRect(j + 1 * 60, 300 - 30 * arr[j], 58, 30 * arr[j]);
        context.clearRect(j * 60, 0, 58, 300);
        context.fillStyle = "#00bc8c";
        context.fillRect(j * 60, 300 - 30 * arr[j + 1], 58, 30 * arr[j + 1]);
        await waitForPress();
      }

      arr[j + 1] = key;
    }

    // for (let i = 0; i < arr.length - 1; i++) {
    //   for (let j = 0; j < arr.length - 1 - i; j++) {
    //     console.log(j);
    //     if (arr[j] > arr[j + 1]) {
    //       context.clearRect((j + 1) * 60, 0, 58, 300);
    //       context.fillStyle = "#e74c3c";
    //       context.fillRect(
    //         (j + 1) * 60,
    //         300 - 30 * arr[j + 1],
    //         58,
    //         30 * arr[j + 1]
    //       );

    //       context.clearRect(j * 60, 0, 58, 300);
    //       context.fillStyle = "#e74c3c";
    //       context.fillRect(j * 60, 300 - 30 * arr[j], 58, 30 * arr[j]);

    //       context.clearRect((j - 1) * 60, 0, 58, 300);
    //       context.fillStyle = "#adb5bd";
    //       context.fillRect(
    //         (j - 1) * 60,
    //         300 - 30 * arr[j - 1],
    //         58,
    //         30 * arr[j - 1]
    //       );

    //       await wait(300);

    //       [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

    //       let x = (j + 1) * 60;
    //       let xx = j * 60;
    //       let dx = 1;
    //       function animateBubble() {
    //         context.clearRect((j - 1) * 60, 0, 60, 300);
    //         context.fillStyle = "#adb5bd";
    //         context.fillRect(
    //           (j - 1) * 60,
    //           300 - 30 * arr[j - 1],
    //           58,
    //           30 * arr[j - 1]
    //         );

    //         context.clearRect(j * 60, 0, 60, 300);
    //         context.fillStyle = "#f39c12";
    //         context.fillRect(x, 300 - 30 * arr[j], 58, 30 * arr[j]);

    //         context.clearRect((j + 1) * 60, 0, 58, 300);
    //         context.fillStyle = "#00bc8c";
    //         context.fillRect(xx, 300 - 30 * arr[j + 1], 58, 30 * arr[j + 1]);

    //         if (x + 60 === (j + 1) * 60) {
    //           return;
    //         }
    //         x -= dx;
    //         xx += dx;
    //         requestAnimationFrame(animateBubble);
    //       }
    //       animateBubble();
    //       await wait(500);
    //     } else if (arr[j] <= arr[j + 1]) {
    //       context.clearRect((j + 1) * 60, 0, 58, 300);
    //       context.fillStyle = "#00bc8c";
    //       context.fillRect(
    //         (j + 1) * 60,
    //         300 - 30 * arr[j + 1],
    //         58,
    //         30 * arr[j + 1]
    //       );

    //       context.clearRect((j - 1) * 60, 0, 58, 300);
    //       context.fillStyle = "#adb5bd";
    //       context.fillRect(
    //         (j - 1) * 60,
    //         300 - 30 * arr[j - 1],
    //         58,
    //         30 * arr[j - 1]
    //       );

    //       context.clearRect(j * 60, 0, 58, 300);
    //       context.fillStyle = "#f39c12";
    //       context.fillRect(j * 60, 300 - 30 * arr[j], 58, 30 * arr[j]);
    //     }
    //     if (j === arr.length - 2 - i) {
    //       console.log("here");
    //       context.clearRect(j * 60, 0, 58, 300);
    //       context.fillStyle = "#adb5bd";
    //       context.fillRect(j * 60, 300 - 30 * arr[j], 58, 30 * arr[j]);
    //     }
    //     if (arr.length - 1 - i === 1) {
    //       context.clearRect(j * 60, 0, 58, 300);
    //       context.fillStyle = "#00bc8c";
    //       context.fillRect(j * 60, 300 - 30 * arr[j], 58, 30 * arr[j]);
    //     }
    //     await wait(200);
    //     await waitForPress();
    //   }
    // }
  };

  return (
    <div className="InsertionSort">
      <div className="card-header">Insertion Sort</div>
      <div className="card-body">
        <button type="button" className="btn btn-success" onClick={NewArray}>
          Generate New Array
        </button>
        <br></br>
        <br></br>
        <button
          type="button"
          className="btn btn-success"
          onClick={SortThatArray}
        >
          Insertion Sort The Array
        </button>
        <br></br>
        <span>Origional Array: {arrValues}</span>
        <br></br>
        <span>Insertion Sorted Array: {sortedArrValues}</span>
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

export default InsertionSortDisplay;
