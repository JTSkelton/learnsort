import Canvas from "../FunctionsForAll/Canvas";
import React, { useState, useRef, useEffect } from "react";
import RandomArr from "../FunctionsForAll/RandomArr";
import DrawFast from "../FunctionsForAll/DrawFastArray";
import { wait } from "@testing-library/user-event/dist/utils";

let i = 0;
let j = 0;

function MergeSortDisplayFast() {
  const [arrValues, setArrValues] = useState(RandomArr(100));
  const [canvas, setCanvas] = useState(
    <Canvas array={[...arrValues]} draw={DrawFast} height={600} width={1000} />
  );

  const [ButtonText, SetButtonText] = useState("Start");
  const buttonTextRef = useRef(ButtonText);
  useEffect(() => {
    buttonTextRef.current = ButtonText;
  }, [ButtonText]);

  async function SortThatArray() {
    setCanvas(<Canvas draw={drawSorted} height={600} width={1000} />);
  }

  function ResetButton() {
    const arr = [...arrValues];
    i = 0;
    j = 0;
    setCanvas(
      <Canvas array={[...arr]} draw={DrawFast} height={600} width={1000} />
    );
  }

  const ToggleButtonText = async () => {
    if (ButtonText === "Stop") {
      SetButtonText("Start");
    } else if (ButtonText === "Start") {
      SetButtonText("Stop");
      await wait(50);
      await SortThatArray();
    }
  };

  function NewArray() {
    const array = RandomArr(100);
    i = 0;
    j = 0;
    setArrValues(array);
    SetButtonText("Start");
    setCanvas(
      <Canvas array={[...array]} draw={DrawFast} height={600} width={1000} />
    );
  }

  const drawSorted = async (context) => {
    const array = [...arrValues];

    const mergeSort = (array) => {
      if (array.length <= 1) {
        return array;
      }
      const middleIndex = Math.floor(array.length / 2);
      console.log("MI " + middleIndex);
      const leftArray = array.slice(0, middleIndex);
      console.log("LA " + leftArray);
      const rightArray = array.slice(middleIndex);
      console.log("RA " + rightArray);
      return merge(mergeSort(leftArray), mergeSort(rightArray));
    };

    const merge = async (leftArr, rightArr) => {
      const output = [];
      let leftIndex = 0;
      let rightIndex = 0;

      while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        const i = leftArr[leftIndex];
        console.log("LE " + i);
        const j = rightArr[rightIndex];
        console.log("RE " + j);

        if (i < j) {
          output.push(i);
          leftIndex++;
        } else {
          context.clearRect((j + 1) * 60, 0, 58, 300);
          context.fillStyle = "#e74c3c";
          context.fillRect(
            (j + 1) * 60,
            300 - 30 * array[j + 1],
            58,
            30 * array[j + 1]
          );

          context.clearRect(j * 60, 0, 58, 300);
          context.fillStyle = "#e74c3c";
          context.fillRect(j * 60, 300 - 30 * array[j], 58, 30 * array[j]);

          context.clearRect((j - 1) * 60, 0, 58, 300);
          context.fillStyle = "#adb5bd";
          context.fillRect(
            (j - 1) * 60,
            300 - 30 * array[j - 1],
            58,
            30 * array[j - 1]
          );

          await wait(300);

          output.push(j);
          rightIndex++;
        }
      }
      console.log("OP " + output);
      console.log([
        ...output,

        ...leftArr.slice(leftIndex),

        ...rightArr.slice(rightIndex),
      ]);
      return [
        ...output,
        ...leftArr.slice(leftIndex),
        ...rightArr.slice(rightIndex),
      ];
    };
    mergeSort(array);
  };

  // for (i; i < arr.length - 1; i++) {
  //   for (j; j < arr.length - 1 - i; j++) {
  //     if (buttonTextRef.current === "Start") return;
  //     if (arr[j] > arr[j + 1]) {
  //       [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
  //       context.clearRect((j + 1) * 10, 0, 8, 600);
  //       context.fillStyle = "#00bc8c";
  //       context.fillRect(
  //         (j + 1) * 10,
  //         600 - 50 * arr[j + 1],
  //         8,
  //         50 * arr[j + 1]
  //       );
  //       context.clearRect(j * 10, 0, 8, 600);
  //       context.fillStyle = "#f39c12";
  //       context.fillRect(j * 10, 600 - 50 * arr[j], 8, 50 * arr[j]);

  //       context.clearRect((j - 1) * 10, 0, 8, 600);
  //       context.fillStyle = "#adb5bd";
  //       context.fillRect(
  //         (j - 1) * 10,
  //         600 - 50 * arr[j - 1],
  //         8,
  //         50 * arr[j - 1]
  //       );
  //     } else if (arr[j] <= arr[j + 1]) {
  //       context.clearRect((j + 1) * 10, 0, 8, 600);
  //       context.fillStyle = "#00bc8c";
  //       context.fillRect(
  //         (j + 1) * 10,
  //         600 - 50 * arr[j + 1],
  //         8,
  //         50 * arr[j + 1]
  //       );

  //       context.clearRect((j - 1) * 10, 0, 8, 600);
  //       context.fillStyle = "#adb5bd";
  //       context.fillRect(
  //         (j - 1) * 10,
  //         600 - 50 * arr[j - 1],
  //         8,
  //         50 * arr[j - 1]
  //       );

  //       context.clearRect(j * 10, 0, 8, 600);
  //       context.fillStyle = "#f39c12";
  //       context.fillRect(j * 10, 600 - 50 * arr[j], 8, 50 * arr[j]);
  //     }
  //     if (j === arr.length - 2 - i) {
  //       context.clearRect(j * 10, 0, 8, 600);
  //       context.fillStyle = "#adb5bd";
  //       context.fillRect(j * 10, 600 - 50 * arr[j], 8, 50 * arr[j]);
  //     }
  //     if (arr.length - 1 - i === 1) {
  //       context.clearRect(j * 10, 0, 8, 600);
  //       context.fillStyle = "#00bc8c";
  //       context.fillRect(j * 10, 600 - 50 * arr[j], 8, 50 * arr[j]);
  //     }
  //     await wait(10);
  //   }
  //   j = 0;
  // }

  return (
    <div className="mergeSortFast">
      <div className="card-body">
        <button type="button" className="btn btn-success" onClick={NewArray}>
          New Array
        </button>

        <button
          type="button"
          className="btn btn-success"
          onClick={ToggleButtonText}
        >
          {ButtonText}
        </button>
        <button type="button" className="btn btn-success" onClick={ResetButton}>
          Reset
        </button>

        <span>{canvas}</span>
      </div>
    </div>
  );
}

export default MergeSortDisplayFast;
