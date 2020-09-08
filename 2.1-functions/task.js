//Task 1


let a = prompt("Введите значение а :");
let b = prompt("Введите значение b :");
let c = prompt("Введите значение c :");

a = parseInt(a);
b = parseInt(b);
c = parseInt(c);



function getSolution(a,b,c) {
  let d = b**2 - 4*a*c;
  let answerObject = {
    D : d,
    roots : []
  };

  if (d < 0) {
    return answerObject;
  }
  else if (d === 0) {
    let x1 = -b / (2*a);
    x1 = x1.toFixed(2);
    answerObject.roots.push(x1);
    return answerObject;
  }
  else if (d > 0) {
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    x1 = x1.toFixed(2);
    x2 = x2.toFixed(2);
    answerObject.roots.push(x1,x2);
    return answerObject;
  };
};

function showSolutionsMessage(a,b,c) {
  result = getSolution(a,b,c);
  console.log(`Вычисляем корни квадратного уравнения : ${a}x² + ${b}x + ${c}`);
  console.log(`Значение дискриминанта : ${result.D}`);
  if (result.D == 0) {
    console.log("Уравнение не имеет вещественных корней");
  }
  if else (result.roots.length == 1) {
    console.log(` Уравнение имеет один корень. x1 = ${result.roots[0]} `);
  }
  if else (result.roots.length > 1) {
    console.log(` Уравнение имеет два корня. x1 = ${result.roots[0]} , x2 = ${result.roots[1]}`);
  }
}

showSolutionsMessage(a,b,c);
//Task 2

function getAverageMark(marks) {
  if (marks.length === 0) {
    return 0;
  }
  let sumOfMarks = 0;
  for ( let i = 0; i < marks.length ; i++) {
    sumOfMarks = sumOfMarks + marks[i];
  }
  let averageMark = sumOfMarks / marks.length;
  return averageMark;
};

function getaAverageScore(data) {
  if (data == {}) {
    return {average : 0}
  }
  let subjectAverage = {};
  for (subject in data) {
    subjectAverage = getAverageMark(data[subject]);
  }
  let subjectAverage.average = getAverageMark(Object.values(data));
  return subjectAverage;
}

// Task 3
  let decodedValue = {};
function getPersonData(secretData) {
  let secretData.firstname = secretData.aaa;
  let secretData.lastname = secretData.bbb;
  for (code in secretData) {
    decodedValue = getDecodedValue(secretData[code]);
  }
  return decodedValue;
}

function getDecodedValue(secret) {

  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === 0) {
      secret[i] = "Родриго";
    }
    else if (secret[i] === 1){
      secret[i] = " Эмильо";
    }
    return secret;
  }

}
