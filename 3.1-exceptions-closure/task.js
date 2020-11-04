//task 1
function parseCount(items) {
  let parseNumber = Number.parseInt(items);
  if (isNaN(parseNumber)) {
    throw new Error("Невалидное значение.");
  }
  return parseNumber;
}

function validateCount(itemsData) {
  try {
    return parseCount(itemsData);
  }
  catch(e) {
    return e;
  }
}

//task 2
class Triangle {
  constructor(a, b, c){
    this.first = a;
    this.second = b;
    this.third = c;
    if (a + b <= c ||
      b + c <= a ||
      a + c <= b ) {
      throw new Error ("Треугольник с такими сторонами не существует.");
    }
  }
  getPerimeter() {
    return this.first + this.second + this.third;
  }

  getArea() {
    let p = getPerimeter() / 2;
    let area = Math.sqrt(p * (p - this.first) * (p - this.second) * (p - this.third));
    return Number(area.toFixed(3));
  }

}
class FakeTriangle extends Triangle {
  constructor(a, b, c) {
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
 function getTriangle(a,b,c) {
   try {
     return new Triangle(a,b,c);
   }
   catch(e) {
     return new FakeTriangle(a,b,c);
     }
 }
getTriangle(7,14,8);

getTriangle(2,3,4);
