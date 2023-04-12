"use strict"

function getArrayParams(...arr) {
	let min = Infinity; 
	let max = -Infinity;
	let sum = 0;
	for (let elem of arr) {
		sum += elem;
		if (elem > max) {
			max = elem;
		}
		if (elem < min) {
			min = elem;
		}
	}
	let avg = Number((sum / arr.length).toFixed(2));
	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	let sum = 0;
	if (arr.length == 0) {
		sum = 0;
	} else {
		for (let elem of arr) {
			sum += elem;
		}
	}
	return sum;
}

function differenceMaxMinWorker(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let difference;
	if (arr.length == 0) {
		difference = 0;
	} else {
		for (let elem of arr) {
			if (elem > max) {
				max = elem;
			}
			if (elem < min) {
				min = elem;
			}
		}
		difference = max - min;
	}
	return difference;
}

function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0;
	let sumOddElement = 0;
	let difference;
	if (arr.length == 0) {
		difference = 0;
	} else {
		for (let elem of arr) {
			if (elem % 2) {
				sumOddElement += elem;
			} else {
				sumEvenElement += elem;
			}
		}
	}
	difference = sumEvenElement - sumOddElement;
	return difference;
}

function averageEvenElementsWorker(...arr) {
	let sumEvenElement = 0;
	let countEvenElement = 0;
	let avg;
	if (arr.length == 0) {
		avg = 0;
	} else {
		for (let elem of arr) {
			if (elem % 2 == 0) {
				sumEvenElement += elem;
				countEvenElement++;
			}
		}
		avg = sumEvenElement / countEvenElement;
	}
	return avg;
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	for (let elem of arrOfArr) {
		const res = func(...elem);
		if (res > maxWorkerResult) {
			maxWorkerResult = res;
		}
	}
	return maxWorkerResult;
}
