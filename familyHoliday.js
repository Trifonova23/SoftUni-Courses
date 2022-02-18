function familyHoliday(input) {
  let ivanoviBudget = Number(input[0]);
  let countNights = Number(input[1]);
  let priceNights = Number(input[2]);
  let additionalCosts = Number(input[3]);
  let leftMoneyAfterHoliday = 0;
  let nightAfterDiscount = 0;
  let sumPriceForAllNights = 0;
  let totalSumMoney = 0;

  sumPriceForAllNights = countNights * priceNights;
  if (countNights > 7) {
    nightAfterDiscount = (sumPriceForAllNights * 0.95) / 100;
    additionalCosts = (ivanoviBudget * 2) / 100;
    totalSumMoney = nightAfterDiscount + additionalCosts;
    leftMoneyAfterHoliday = ivanoviBudget - totalSumMoney;
  } else if (countNights < 7) {
    totalSumMoney = totalSumMoney + additionalCosts;
    additionalCosts = (ivanoviBudget * 2) / 100;
  } else if (totalSumMoney <= ivanoviBudget) {
    console.log(
      `Ivanovi will be left with ${leftMoneyAfterHoliday} leva after vacation.`
    );
  } else {
    console.log(` ${leftMoneyAfterHoliday} leva needed.`);
  }
}
familyHoliday(["800.50", "8", "100", "2"]);
