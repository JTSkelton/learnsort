const Draw = (context, array) => {
  context.clearRect(0, 0, 400, 150);
  for (var i = 0; i < array.length; i++) {
    context.fillStyle = "#adb5bd";
    context.fillRect(i * 10, 150 - 10 * array[i], 8, 10 * array[i]);
  }
};

export default Draw;
