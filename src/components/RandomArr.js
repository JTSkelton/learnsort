function RandomArr() {
  const arrayLength = 20;
  const min = Math.ceil(0);
  const max = Math.floor(9);
  const array = Array.from(Array(arrayLength)).map((x) =>
    Math.floor(Math.random() * (max - min) + min)
  );

  return array;
}

export default RandomArr;
