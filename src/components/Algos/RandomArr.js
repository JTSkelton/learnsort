function RandomArr() {
  const arrayLength = 40;
  const min = 1;
  const max = 10;
  const array = Array.from(Array(arrayLength)).map((x) =>
    Math.floor(Math.random() * (max - min) + min)
  );

  return array;
}

export default RandomArr;
