import React, { useState } from "react";

function RandomArr() {
  const initialArr = [];
  const [arrValues, setArrValues] = useState(initialArr);

  function generateArr() {
    const arrayLength = 20;
    const min = Math.ceil(0);
    const max = Math.floor(9);
    setArrValues(
      Array.from(Array(arrayLength)).map((x) =>
        Math.floor(Math.random() * (max - min) + min)
      )
    );
  }

  return (
    <>
      <button onClick={generateArr}>Generate Array</button>
      <span>{arrValues}</span>
    </>
  );
}

export default RandomArr;
