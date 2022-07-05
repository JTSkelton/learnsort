const Draw = (context, array, width, height) => {
  context.clearRect(0, 0, 600, 300);
  for (var i = 0; i < array.length; i++) {
    context.fillStyle = "#adb5bd";
    context.fillRect(i * 60, 300 - 30 * array[i], 58, 30 * array[i]);
  }
};

export default Draw;
