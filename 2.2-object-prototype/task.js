//Task 1
let isPalindrome = function () {
  let phrase = this.split('');
  let phraseReverse = phrase.reverse();
  if (phrase === phraseReverse) {
    return true;
  }
  else {
    return false;
  }
}
String.prototype = isPalindrome;

String.prototype.isPalindrome() ;

//Task 2

function getAverageMark(marks) {
    let sum = 0;
    let averageMark;
    let roundedAverage;
    for (i = 0; i < marks.length ; i++) {
      sum = sum + i;
    }
    averageMark = sum / marks.length;
    roundedAverage = Math.round(averageMark);
    return roundedAverage;
}

function checkBirthday(birthday) {
    let now = new Date(value);
    let date ;
    let birthday = +date;
    let diff = now - birthday;
    let age = diff / (365.25 * 24 * 60 * 60 * 1000);
    if (age > 18) {
      let verdict = console.log("Клиент является совершеннолетним.");
    }
    else {
      let verdict = console.log("Не дорос еще!");
    }

    return verdict;
}
