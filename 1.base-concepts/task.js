"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let d = b ** 2 - 4 * a * c;
	if (d == 0) {
		arr.push(-b / (2 * a));
	} else if (d > 0) {
		arr.push((-b + Math.sqrt(d)) / (2 * a));
		arr.push((-b - Math.sqrt(d)) / (2 * a));
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let s = Number(amount) - Number(contribution);       //Тело кредита
	let p = (Number(percent) / 100) / 12;                //Коэффициент = 1/12 месячной ставки
	let n = Number(countMonths);                         //Количество месяцев
	let monthPay = (s * (p + (p / (((1 + p) ** n) - 1))));    //Ежемесячный платеж
	let allPay = +(monthPay * n).toFixed(2);                  ////Общая сумма
	return allPay;
}