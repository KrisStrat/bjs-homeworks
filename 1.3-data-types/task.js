
function calculateTotalMortgage(percent, contribution, amount, date) {
  let percent;
  let contribution;
  let amount;
  let date;
  let sumCredit;
  let month;
  let actualDate = new Date().getFullYear();
  let monthlyAmount;
  let totalAmount;
    if (typeof percent == Boolean) {
      return ` Параметр \" Процент \" содержит неправильное значение ${percent}`;
    }
    else  if (typeof contribution == Boolean){
      return ` Параметр \" Начальный взнос \" содержит неправильное значение ${contribution}`;
    }
    else if (typeof amount == Boolean) {
      return ` Параметр \" Сумма кредита \" содержит неправильное значение ${amount}`;
    }
    else if (typeof percent == Object) {
      return ` Параметр \" Процент \" содержит неправильное значение ${percent}`;
    }
    else  if (typeof contribution == Object){
      return ` Параметр \" Начальный взнос \" содержит неправильное значение ${contribution}`;
    }
    else if (typeof amount == Object) {
      return ` Параметр \" Сумма кредита \" содержит неправильное значение ${amount}`;
    }
    else if (typeof percent == String) {
      percent = parseInt(percent);
      if (isNan(percent) === true) {  return ` Параметр \" Процент \" содержит неправильное значение ${percent}`;}
    }
    else  if (typeof contribution == String){
      contribution = parseInt(contribution);
      if (isNan(contribution) === true) {  return ` Параметр \" Начальный взнос \" содержит неправильное значение ${contribution}`;}
    }
    else if (typeof amount == String) {
      amount = parseInt(amount);
      if (isNan(amount) === true) {
        return ` Параметр \" Сумма кредита \" содержит неправильное значение ${amount}`;
    }
    sumCredit = amount - contribution;
    month = (date.getFullYear() - actualDate) * 12;
    let p = percent / 12;
    monthlyAmount = sumCredit * (p + p / (((1 + p)^month) - 1));
    let fullSum = monthlyAmount * month;
    totalAmount = fullSum.toFixed(2);
    if (typeof totalAmount == Number) {
      console.log(totalAmount);
    }




    return totalAmount;
}

function getGreeting(name) {
    let name;
    let greeting = `Привет мир! Меня зовут ${name}.`;
    if (name == "" || name == undefined || name == null) {
      name = "Аноним";
    };

    return greeting;


}
