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
  const [arrValues, setArrValues] = useState(RandomArr(5));
  const [sortedArrValues, setSorted] = useState([]);
  const [canvas, setCanvas] = useState(
    <Canvas array={[...arrValues]} draw={Draw} height={300} width={600} />
  );

  function SortThatArray() {
    const array = [...arrValues];
    setSorted(mergeSort(array));
    setCanvas(<Canvas draw={drawSorted} height={300} width={600} />);
  }

  function NewArray() {
    const array = RandomArr(5);
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

  async function animateHighlight(
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
    const refArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    const mergeSort = async (array, refArray) => {
      if (array.length <= 1) {
        return array;
      }
      const middleIndex = Math.floor(array.length / 2);

      const refLeftArray = refArray.slice(0, middleIndex);
      console.log("Left Array Ref " + refLeftArray);
      const refRightArray = refArray.slice(middleIndex);
      console.log("Right Array Ref " + refRightArray);

      const leftArray = array.slice(0, middleIndex);
      console.log("Left Array " + leftArray);
      const rightArray = array.slice(middleIndex);
      console.log("Right Array " + rightArray);

      // await waitForPress();
      return merge(
        await mergeSort(leftArray, refLeftArray),
        await mergeSort(rightArray, refRightArray),
        refLeftArray,
        refRightArray
      );
    };

    const merge = async (leftArr, rightArr, leftArrayRef, rightArrayRef) => {
      const output = [];
      let leftIndex = 0;
      let rightIndex = 0;
      let tempLeft = 0;

      while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        let leftElement = leftArr[leftIndex];
        console.log("1) Left Element " + leftElement);
        console.log("2) Left Index " + leftIndex);
        let rightElement = rightArr[rightIndex];
        let animateEndIndex = rightArrayRef[rightIndex];
        console.log("6) AnimateEndIndex: " + animateEndIndex);
        console.log("3) Right Element " + rightElement);
        console.log("4) Right Index " + rightIndex);
        let animateStartIndex = animateEndIndex - 1;
        console.log("5) AnimateStartIndex: " + animateStartIndex);

        console.log("7) Output " + output);

        animateHighlight(
          context,
          animateStartIndex,
          animateEndIndex,
          leftElement,
          rightElement
        );
        await wait(300);
        // await waitForPress();

        if (leftElement <= rightElement) {
          animateNonSwap(
            context,
            animateStartIndex,
            animateEndIndex,
            leftElement,
            rightElement
          );
          output.push(leftElement);
          leftIndex++;
          // tempLeft = animateEndIndex - 1;
          console.log("8) Left Index " + leftIndex);
          await wait(300);
          // await waitForPress();
        } else {
          animateSwap(
            context,
            animateStartIndex,
            animateEndIndex,
            leftElement,
            rightElement
          );
          rightIndex++;
          output.push(rightElement);
          //temp left needs to follow the swap index
          // tempLeft = animateEndIndex - 1;
          console.log("9) TempLeft " + tempLeft);
          await wait(300);
          // await waitForPress();
        }
      }

      console.log(
        "10) Returned Array " +
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
    mergeSort(array, refArray);
  };

  return (
    <div className="stepSortBody">
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
          Start
        </button>
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

export default MergeSortDisplay;
