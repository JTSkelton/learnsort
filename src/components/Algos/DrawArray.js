const Draw = (context, array) => {
  context.clearRect(0, 0, 400, 150);
  for (var i = 0; i < array.length; i++) {
    var grd = context.createLinearGradient(0, 400, 400, 0);
    grd.addColorStop(0, "black");
    grd.addColorStop(1, "white");
    context.fillStyle = grd;
    context.strokeStyle = "#000000";
    context.fillRect(i * 10, 150 - 10 * array[i], 8, 10 * array[i]);
  }
};

export default Draw;
