"use strict"

//Задача 1. Форматтер чисел

function parseCount(value) {
   if (Number.isNaN(Number.parseFloat(value))) {
    throw new Error('Невалидное значение');
   }
   return Number.parseFloat(value);
}

function validateCount(value) {
    try{
        return parseCount(value);
    } catch(error) {
        return error;
    }
}

//Задача 2. Треугольник

class Triangle {
    constructor(sideA, sideB, sideC) {
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
        if (sideA + sideB < sideC || sideA + sideC < sideB || sideB + sideC < sideA) {
            throw new Error('Треугольник с такими сторонами не существует')
        }
    }
    get perimeter() {
        return (this.sideA + this.sideB + this.sideC);
    }
    get area() {
        let p = (this.sideA + this.sideB + this.sideC) / 2;
        return +(Math.sqrt(p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC))).toFixed(3);
    }
}
function getTriangle(sideA, sideB, sideC) {
    try{
        return new Triangle(sideA, sideB, sideC);
    } catch (error) {
        return {
            get area() {return 'Ошибка! Треугольник не существует'},
            get perimeter() {return 'Ошибка! Треугольник не существует'}
        }
    }
}
