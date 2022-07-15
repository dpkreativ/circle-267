/**
 * Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7
 */

function AreaOfTriangle(a, b, c) {
  const s = (a + b + c) / 2;
  const area = Math.ceil(Math.sqrt(s * (s - a) * (s - b) * (s - c)) * 10) / 10;
  return area;
}

console.log(AreaOfTriangle(5, 6, 7));
