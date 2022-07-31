import Canvas from "../FunctionsForAll/Canvas";
import React, { useState, useRef, useEffect } from "react";
import RandomArr from "../FunctionsForAll/RandomArr";
import DrawFast from "../FunctionsForAll/DrawFastArray";
import { wait } from "@testing-library/user-event/dist/utils";

function SelectionSortDisplayFast() {
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
    setArrValues(array);
    SetButtonText("Start");
    setCanvas(
      <Canvas array={[...array]} draw={DrawFast} height={600} width={1000} />
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
        // context.clearRect(j * 10, 0, 8, 600);
        // context.fillStyle = "#00bc8c";
        // context.fillRect(j * 10, 600 - 50 * arr[j], 8, 50 * arr[j]);

        // context.clearRect((j - 1) * 10, 0, 8, 600);
        // context.fillStyle = "#adb5bd";
        // context.fillRect(
        //   (j - 1) * 10,
        //   600 - 50 * arr[j - 1],
        //   8,
        //   50 * arr[j - 1]
        // );
        // await wait(20);
      }
      // await waitForPress();
      if (arr[i] > arr[minIndex]) {
        context.clearRect(minIndex * 10, 0, 8, 600);
        context.fillStyle = "#e74c3c";
        context.fillRect(
          minIndex * 10,
          600 - 50 * arr[minIndex],
          8,
          50 * arr[minIndex]
        );
        context.clearRect(i * 10, 0, 8, 600);
        context.fillStyle = "#e74c3c";
        context.fillRect(i * 10, 600 - 50 * arr[i], 8, 50 * arr[i]);
        await wait(40);
      }

      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      context.clearRect(minIndex * 10, 0, 8, 600);
      context.fillStyle = "#00bc8c";
      context.fillRect(
        minIndex * 10,
        600 - 50 * arr[minIndex],
        8,
        50 * arr[minIndex]
      );
      context.clearRect(i * 10, 0, 8, 600);
      context.fillStyle = "#00bc8c";
      context.fillRect(i * 10, 600 - 50 * arr[i], 8, 50 * arr[i]);
      await wait(20);
    }
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

export default SelectionSortDisplayFast;
