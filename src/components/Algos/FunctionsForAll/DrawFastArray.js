const DrawFast = (context, array, width, height) => {
  context.clearRect(0, 0, 1000, 600);
  for (var i = 0; i < array.length; i++) {
    context.fillStyle = "#adb5bd";
    context.fillRect(i * 10, 600 - 50 * array[i], 8, 50 * array[i]);
  }
};

export default DrawFast;
