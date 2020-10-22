//task 1
function parseCount(items) {
  let parseNumber = Number.parseInt(items);
  if (isNaN(parseNumber)) {
    throw "Невалидное значение";
  }
  return parseNumber;
}

function validateCount(itemsData) {
  try {
    let validData = parseCount(itemsData);
    return validData;
  }
  catch(e) {
    return new Error("Невалидное значение");
  }
}

//task 2
class Triangle {
  constructor(a, b, c) {
    this.first = a;
    this.second = b;
    this.third = c;
    if (this.first + this.second <= this.third || this.second + this.third <= this.first || this.first + this.third <= this.second ) {
      throw "Треугольник с такими сторонами не существует.";
    }
  }
  getPerimetr() {
    let perimetr = a + b + c ;
    return perimetr;
  }

  getArea() {
    let p = (a + b + c) / 2;
    let area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    return area.toFixed(3);
  }
}
 function getTriangle(a, b, c) {
   try {
     return new Triangle;
   }
   catch(e) {


   }
 }
