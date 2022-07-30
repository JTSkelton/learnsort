import RandomArr from "../FunctionsForAll/RandomArr";
import React, { useState } from "react";
import Canvas from "../FunctionsForAll/Canvas";
import Draw from "../FunctionsForAll/DrawArray";
import { wait } from "@testing-library/user-event/dist/utils";

const mergeSort = (array) => {
  if (array.length <= 1) {
    return array;
  }
  const middleIndex = Math.floor(array.length / 2);

  const leftArray = array.slice(0, middleIndex);

  const rightArray = array.slice(middleIndex);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
};

const merge = (leftArr, rightArr) => {
  const output = [];
  let leftIndex = 0;

  let rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    const leftElement = leftArr[leftIndex];

    const rightElement = rightArr[rightIndex];

    if (leftElement < rightElement) {
      output.push(leftElement);
      leftIndex++;
    } else {
      output.push(rightElement);
      rightIndex++;
    }
  }

  return [
    ...output,
    ...leftArr.slice(leftIndex),
    ...rightArr.slice(rightIndex),
  ];
};

let waitForPressResolve = true;
function waitForPress() {
  return new Promise((resolve) => (waitForPressResolve = resolve));
}

function btnResolver() {
  if (waitForPressResolve) waitForPressResolve();
}

function MergeSortDisplay() {
  const [arrValues, setArrValues] = useState(RandomArr(10));
  const [sortedArrValues, setSorted] = useState([]);
  const [canvas, setCanvas] = useState(
    <Canvas array={[...arrValues]} draw={Draw} height={300} width={600} />
  );

  function sortThatArray() {
    const array = [...arrValues];
    setSorted(mergeSort(array));
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

  async function animateSwap(
    context,
    animateStartIndex,
    animateEndIndex,
    leftElement,
    rightElement
  ) {
    context.clearRect(animateStartIndex * 60, 0, 58, 300);
    context.fillStyle = "#e74c3c";
    context.fillRect(
      animateStartIndex * 60,
      300 - 30 * leftElement,
      58,
      30 * leftElement
    );

    context.clearRect(animateEndIndex * 60, 0, 58, 300);
    context.fillStyle = "#e74c3c";
    context.fillRect(
      animateEndIndex * 60,
      300 - 30 * rightElement,
      58,
      30 * rightElement
    );

    await wait(300);

    //swap
    context.clearRect(animateStartIndex * 60, 0, 58, 300);
    context.fillStyle = "#00bc8c";
    context.fillRect(
      animateStartIndex * 60,
      300 - 30 * rightElement,
      58,
      30 * rightElement
    );

    context.clearRect(animateEndIndex * 60, 0, 58, 300);
    context.fillStyle = "#f39c12";
    context.fillRect(
      animateEndIndex * 60,
      300 - 30 * leftElement,
      58,
      30 * leftElement
    );
  }

  async function animateNonSwap(
    context,
    animateStartIndex,
    animateEndIndex,
    leftElement,
    rightElement
  ) {
    context.clearRect(animateStartIndex * 60, 0, 58, 300);
    context.fillStyle = "#00bc8c";
    context.fillRect(
      animateStartIndex * 60,
      300 - 30 * leftElement,
      58,
      30 * leftElement
    );

    context.clearRect(animateEndIndex * 60, 0, 58, 300);
    context.fillStyle = "#00bc8c";
    context.fillRect(
      animateEndIndex * 60,
      300 - 30 * rightElement,
      58,
      30 * rightElement
    );
  }

  async function animateHighligh(
    context,
    animateStartIndex,
    animateEndIndex,
    leftElement,
    rightElement
  ) {
    context.clearRect(animateStartIndex * 60, 0, 58, 300);
    context.fillStyle = "#3498db";
    context.fillRect(
      animateStartIndex * 60,
      300 - 30 * leftElement,
      58,
      30 * leftElement
    );

    context.clearRect(animateEndIndex * 60, 0, 58, 300);
    context.fillStyle = "#3498db";
    context.fillRect(
      animateEndIndex * 60,
      300 - 30 * rightElement,
      58,
      30 * rightElement
    );
  }

  const drawSorted = async (context) => {
    const array = [...arrValues];
    let animateStartIndex = 0;
    let animateEndIndex = 1;

    const mergeSort = async (array) => {
      if (array.length <= 1) {
        return array;
      }
      const middleIndex = Math.floor(array.length / 2);
      const leftArray = array.slice(0, middleIndex);
      console.log("Left Array " + leftArray);
      const rightArray = array.slice(middleIndex);
      console.log("Right Array " + rightArray);
      console.log("WAIT Up");
      const leftArrLength = array.slice(0, middleIndex).length;
      const rightArrLength = array.slice(0, middleIndex).length;
      await waitForPress();
      return merge(
        await mergeSort(leftArray),
        await mergeSort(rightArray),
        middleIndex,
        leftArrLength,
        rightArrLength
      );
    };

    const merge = async (
      leftArr,
      rightArr,
      midIndx,
      leftArrayLength,
      rightArrayLength
    ) => {
      const output = [];
      let leftIndex = 0;
      let rightIndex = 0;

      console.log("MIDI " + midIndx);

      while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        const leftElement = leftArr[leftIndex];
        console.log("Left Element " + leftElement);
        const rightElement = rightArr[rightIndex];
        console.log("Right Element " + rightElement);

        animateHighligh(
          context,
          animateStartIndex,
          animateEndIndex,
          leftElement,
          rightElement
        );

        console.log("WAIT LOW");
        await waitForPress();

        if (leftElement <= rightElement) {
          animateNonSwap(
            context,
            animateStartIndex,
            animateEndIndex,
            leftElement,
            rightElement
          );

          console.log("WAIT LOW");
          await waitForPress();
          output.push(leftElement);
          console.log("Output " + output);
          leftIndex++;
          animateStartIndex = leftArrayLength + midIndx + 1;
          animateEndIndex = animateStartIndex + 1;
        } else {
          animateSwap(
            context,
            animateStartIndex,
            animateEndIndex,
            leftElement,
            rightElement
          );

          animateStartIndex = leftArrayLength + midIndx + 1;
          animateEndIndex = animateStartIndex + 1;

          output.push(rightElement);
          console.log("Output " + output);
          rightIndex++;
        }
      }
      console.log("LEFT FINAL " + leftArr.slice(leftIndex));
      console.log("RIGHT FINAL " + rightArr.slice(rightIndex));
      console.log(
        "Returned Array " +
          [
            ...output,

            ...leftArr.slice(leftIndex),

            ...rightArr.slice(rightIndex),
          ]
      );

      return [
        ...output,
        ...leftArr.slice(leftIndex),
        ...rightArr.slice(rightIndex),
      ];
    };
    mergeSort(array);
  };

  return (
    <div className="MergeSort">
      <div className="card-header">Merge Sort</div>
      <div className="card-body">
        <button type="button" className="btn btn-success" onClick={NewArray}>
          Generate New Array
        </button>
        <br></br>
        <br></br>
        <button
          type="button"
          className="btn btn-success"
          onClick={sortThatArray}
        >
          Merge Sort The Array
        </button>
        <br></br>
        <span>Origional Array: {arrValues}</span>
        <br></br>
        <span>Merge Sorted Array: {sortedArrValues}</span>
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

export default MergeSortDisplay;
