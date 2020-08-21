let a ;
let b ;
let c ;
let x ;
function getResult(a,b,c){
    let d = (b ** 2) - (4 * a * c);
    if (d < 0) {
       x = [];
    }
    else if (d === 0) {
       x = [-b / (2 * a)];
    }
    else if ((b ** 2) - (4 * a * c) > 0) {
       x = [((-b) + Math.sqrt((b ** 2) - (4 * a * c))) / (2 * a),((-b) - Math.sqrt((b ** 2) - (4 * a * c))) / (2 * a)];
    }
     return x;
}
let marks ;
let averageMark;
function getAverageMark(marks){
    let sum = 0;
    let i;

    if (marks.length === 0) {
      return 0;
    }
    else if (marks.length > 5) {
      marks = marks.splice(5,marks.length - 5);
    }
    for( i = 0, i < 5 , i++) {
      sum += marks[i];
      averageMark = sum / marks.length;
    }

    return averageMark;
}
let name;
let dateOfBirthday;
let result;
function askDrink(name,dateOfBirthday){
    let todayYear = new Date().getFullYear();
    let birthdayYear = dateOfBirthday.getFullYear();

    if (todayYear - birthdayYear < 18) {
      result = `Сожалею, ${name}, но я не могу продать вам алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }
    else if (todayYear - birthdayYear >= 18) {
      result = `Не желаете ли олд-фэшн, ${name}?`;
    }
    return result;
}
