/*
Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7
*/

function AreaOfTriangle(a, b, c) {
  let s = (a + b + c) / 2;
  return Math.ceil(Math.sqrt(s * (s - a) * (s - b) * (s - c)) * 10) / 10;
}

console.log(AreaOfTriangle(5, 6, 7));
