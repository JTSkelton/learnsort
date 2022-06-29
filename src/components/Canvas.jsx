import React from "react";

const Canvas = ({ array, draw, height, width }) => {
  const canvas = React.useRef();
  React.useEffect(() => {
    const context = canvas.current.getContext("2d");
    draw(context, array);
  });
  return <canvas ref={canvas} height={height} width={width} />;
};

export default Canvas;
