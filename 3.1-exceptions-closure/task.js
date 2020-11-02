//task 1
function parseCount(items) {
  let parseNumber = Number.parseInt(items);
  if (isNaN(parseNumber)) {
    let errorItem = New Error("Невалидное значение.")
    throw errorItem;
  }
  return parseNumber;
}

function validateCount(itemsData) {
  try {
    return parseCount(itemsData);
  }
  catch(e) {
    return errorItem;
  }
}

//task 2
let a = Number(prompt("enter the number:"));
let b = Number(prompt("enter the number:"));
let c = Number(prompt("enter the number:"));
class FakeTriangle {
  constructor(a, b, c){
    this.first = a;
    this.second = b;
    this.third = c;
  }
  getPerimeter() {
    return "Ошибка!Треугольник не существует!";
  }
  getArea() {
    return "Ошибка!Треугольник не существует!";
  }
}
class Triangle extends FakeTriangle {
  constructor(a, b, c) {
    if (a + b <= c ||
      b + c <= a ||
      a + c <= b ) {
      throw New Error ("Треугольник с такими сторонами не существует.");
    }
  }
  getPerimeter() {
    return this.first + this.second + this.third;
  }

  getArea() {
    let p = (this.first + this.second + this.third) / 2;
    let area = Math.sqrt(p * (p - this.first) * (p - this.second) * (p - this.third));
    return Number(area.toFixed(3));
  }
}
 function getTriangle() {
   try {
     return new Triangle;
   }
   catch(e) {
     return new FakeTriangle;
     }
 }
