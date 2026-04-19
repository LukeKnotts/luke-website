// function to draw 'paths' from an array onto a 100 x 100 px canvas.

// individual line segments
//

const draw0 = (canvas) => {
  canvas.moveTo(5, 5);
  canvas.lineTo(50, 5);
  canvas.stroke();
};

const draw1 = (canvas) => {
  canvas.moveTo(50, 5);
  canvas.lineTo(95, 5);
  canvas.stroke();
};

const draw2 = (canvas) => {
  canvas.moveTo(5, 5);
  canvas.lineTo(5, 50);
  canvas.stroke();
};

const draw3 = (canvas) => {
  canvas.moveTo(50, 5);
  canvas.lineTo(50, 50);
  canvas.stroke();
};

const draw4 = (canvas) => {
  canvas.moveTo(95, 5);
  canvas.lineTo(95, 50);
  canvas.stroke();
};

const draw5 = (canvas) => {
  canvas.moveTo(50, 50);
  canvas.lineTo(5, 50);
  canvas.stroke();
};

const draw6 = (canvas) => {
  canvas.moveTo(50, 50);
  canvas.lineTo(95, 50);
  canvas.stroke();
};

const draw7 = (canvas) => {
  canvas.moveTo(5, 50);
  canvas.lineTo(5, 95);
  canvas.stroke();
};

const draw8 = (canvas) => {
  canvas.moveTo(50, 50);
  canvas.lineTo(50, 95);
  canvas.stroke();
};

const draw9 = (canvas) => {
  canvas.moveTo(95, 50);
  canvas.lineTo(95, 95);
  canvas.stroke();
};

const draw10 = (canvas) => {
  canvas.moveTo(5, 95);
  canvas.lineTo(50, 95);
  canvas.stroke();
};

const draw11 = (canvas) => {
  canvas.moveTo(50, 95);
  canvas.lineTo(95, 95);
  canvas.stroke();
};

// draw line segments based on input array
//

export default function draw_path(canvas, arr) {
  canvas.lineWidth = 5;
  for (var ii = 0; ii < arr.length; ii++) {
    switch (arr[ii]) {
      case 0:
        draw0(canvas);
        break;
      case 1:
        draw1(canvas);
        break;
      case 2:
        draw2(canvas);
        break;
      case 3:
        draw3(canvas);
        break;
      case 4:
        draw4(canvas);
        break;
      case 5:
        draw5(canvas);
        break;
      case 6:
        draw6(canvas);
        break;
      case 7:
        draw7(canvas);
        break;
      case 8:
        draw8(canvas);
        break;
      case 9:
        draw9(canvas);
        break;
      case 10:
        draw10(canvas);
        break;
      case 11:
        draw11(canvas);
        break;
    }
  }
};