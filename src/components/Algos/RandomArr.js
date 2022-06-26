import React from "react";

function RandomArr() {
  const arrayLength = 20;
  const min = 0;
  const max = 10;
  const array = Array.from(Array(arrayLength)).map((x) =>
    Math.floor(Math.random() * (max - min) + min)
  );

  return array;
}

export default RandomArr;
