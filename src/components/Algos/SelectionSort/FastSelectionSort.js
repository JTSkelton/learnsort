import Canvas from "../FunctionsForAll/Canvas";
import React, { useState, useRef, useEffect } from "react";
import RandomArr from "../FunctionsForAll/RandomArr";
import DrawFast from "../FunctionsForAll/DrawFastArray";
import { wait } from "@testing-library/user-event/dist/utils";

let i = 0;
let j;
let minIndex;

function SelectionSortDisplayFast() {
  const [arrValues, setArrValues] = useState(RandomArr(100));
  const [drawArrValues, setDrawArrValues] = useState([...arrValues]);
  const [disable, setDisable] = useState(false);
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
    SetButtonText("Start");
    const array = [...arrValues];
    setDrawArrValues(array);
    i = 0;
    setCanvas(
      <Canvas array={[...array]} draw={DrawFast} height={600} width={1000} />
    );
  }

  const ToggleButtonText = async () => {
    if (ButtonText === "Stop") {
      SetButtonText("Start");
      setDisable(false);
    } else if (ButtonText === "Start") {
      SetButtonText("Stop");
      setDisable(true);
      // await wait(50);
      await SortThatArray();
    }
  };

  function NewArray() {
    const array = RandomArr(100);
    i = 0;
    setArrValues(array);
    setDrawArrValues(array);
    SetButtonText("Start");
    setCanvas(
      <Canvas array={[...array]} draw={DrawFast} height={600} width={1000} />
    );
  }

  const drawSorted = async (context) => {
    const arr = [...drawArrValues];
    for (i; i < arr.length - 1; i++) {
      minIndex = i;
      for (j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }

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
      }
      await wait(40);

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

      if (arr[i] < arr[minIndex]) {
        context.clearRect(minIndex * 10, 0, 8, 600);
        context.fillStyle = "#adb5bd";
        context.fillRect(
          minIndex * 10,
          600 - 50 * arr[minIndex],
          8,
          50 * arr[minIndex]
        );
      }
      //fills last piece green
      if (i === arr.length - 2) {
        context.clearRect((i + 1) * 10, 0, 8, 600);
        context.fillStyle = "#00bc8c";
        context.fillRect(
          (i + 1) * 10,
          600 - 50 * arr[i + 1],
          8,
          50 * arr[i + 1]
        );
      }
      setDrawArrValues(arr);
      if (buttonTextRef.current === "Start") return;
    }
  };

  return (
    <div className="bubbleSortFast">
      <div className="card-body">
        <button
          type="button"
          className="btn btn-success"
          disabled={disable}
          onClick={NewArray}
        >
          New Array
        </button>

        <button
          type="button"
          className="btn btn-success"
          onClick={ToggleButtonText}
        >
          {ButtonText}
        </button>
        <button
          type="button"
          className="btn btn-success"
          disabled={disable}
          onClick={ResetButton}
        >
          Reset
        </button>

        <span>{canvas}</span>
      </div>
    </div>
  );
}

export default SelectionSortDisplayFast;
