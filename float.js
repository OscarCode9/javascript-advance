const price = 9.99;
const tax = 0.08;
const totalPrice = price * (1 + tax);
console.log(totalPrice); // Salida: 10.788999999999999

function areFloatsEqual(a, b, epsilon = Number.EPSILON) {
    const absA = Math.abs(a);
    const absB = Math.abs(b);
    const diff = Math.abs(a - b);
  
    // Compara la diferencia con el épsilon relativo a la magnitud de los números
    if (a === b) {
      // Manejo de casos especiales: Inf, -Inf, NaN
      return true;
    } else if (a === 0 || b === 0 || (isNaN(a) && isNaN(b))) {
      // Compara con épsilon absoluto para valores cercanos a cero
      return diff < epsilon;
    } else {
      // Compara con épsilon relativo a la magnitud de los números
      return diff / Math.min(absA + absB, Number.MAX_VALUE) < epsilon;
    }
  }

const point1 = { x: 12.345678, y: 98.765432 };
const point2 = { x: 12.345678, y: 98.765432 };
const epsilon = Number.EPSILON;

function arePointsEqual(p1, p2, tolerance) {
  return (
    areFloatsEqual(p1.x, p2.x, tolerance) &&
    areFloatsEqual(p1.y, p2.y, tolerance)
  );
}

console.log(arePointsEqual(point1, point2, epsilon)); // Salida: true

const angle1 = Math.PI / 4; // 0.7853981633974483
const angle2 = Math.PI / 3; // 1.0471975511965976

function areAnglesEqual(a1, a2, tolerance) {
  return areFloatsEqual(a1, a2, tolerance);
}

console.log(areAnglesEqual(angle1, angle2, epsilon));

console.log("/*****/");

console.log(areFloatsEqual(0.1, 0.2));
console.log(areFloatsEqual(0.1 + 0.2, 0.3)); 
console.log(areFloatsEqual(1.2345678, 1.2345679, 0.000001)); 
console.log(areFloatsEqual(1e-20, 1e-20 + 1e-25));
console.log(areFloatsEqual(0, -0));
console.log(areFloatsEqual(NaN, NaN));