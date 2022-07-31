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
    const n = arr.length;
    const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    let i, key, j;
    for (i = 1; i < n; i++) {
      key = arr[i];
      j = i - 1;

      while (j >= 0 && arr[j] > key) {
        if (arr[j] > arr[j + 1]) {
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
          await wait(10);
        }

        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
        context.clearRect((j + 1) * 10, 0, 8, 600);
        context.fillStyle = "#00bc8c";
        context.fillRect(
          (j + 1) * 10,
          600 - 50 * arr[j + 1],
          8,
          50 * arr[j + 1]
        );
        context.clearRect(j * 10, 0, 8, 600);
        context.fillStyle = "#00bc8c";
        context.fillRect(j * 10, 600 - 50 * arr[j], 8, 50 * arr[j]);
        await wait(10);
        j = j - 1;
      }
      arr[j + 1] = key;
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
