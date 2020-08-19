function getResult(a,b,c){
    let a = ;
    let b = ;
    let c = ;
    if ((b ** 2) - (4 * a * c) < 0) {
      let x = [];
    }
    if else ((b ** 2) - (4 * a * c) === 0) {
      let x = -b / (2 * a);
    }
    if else ((b ** 2) - (4 * a * c) > 0) {
      let x = [((-b) + Math.sqrt((b ** 2) - (4 * a * c))) / (2 * a),((-b) - Math.sqrt((b ** 2) - (4 * a * c))) / (2 * a)];
    }
     return x;
}

function getAverageMark(marks){
    let marks = [];
    let sum = 0;

    if (marks.length <= 0) {
      return 0;
    }
    if else (marks.length > 5) {
      let marksRemoved = marks.splice(4,marks.length - 5);
      for (i = 0, i < 5 , i++) {
        sum += marksRemoved[i];
        let averageMark = sum /marksRemoved.length;
      }
    }
    if else (marks.length == 5) {
      for (i = 0, i < 5 , i++) {
        sum += marks[i];
        let averageMark = sum / marks.length;
      }
    }

    return averageMark;
}

function askDrink(name,dateOfBirthday){
    let name
    let dateOfBirthday
    let todayYear = new Date().getFullYear();
    let birthdayYear = dateOfBirthday.getFullYear();
    if (todayYear - birthdayYear < 18) {
      let result = `Сожалею, ${name}, но я не могу продать вам алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }
    else if (todayYear - birthdayYear > 18) {
      let result = `Не желаете ли олд-фэшн, ${name}?`;
    }
    return result;
}
