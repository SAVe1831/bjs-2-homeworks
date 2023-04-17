'use strict'

function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = []
}
let studentFirst = new Student("Алексей", "мужской", 20);
let studentSecond = new Student("Анатолий", "мужской", 24);
let studentThird = new Student("Татьяна", "женский", 21);
let studentFourth = new Student("Игорь", "мужской", 19);
let studentFifth = new Student("Надежда", "женский", 18);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if (this.marks) {
    for (let mark of marks)
    this.marks.push(mark);
  }
}

Student.prototype.getAverage = function () {
  if (this.marks === undefined || this.marks.length === 0) {
    return 0;
  } else {
    return (this.marks.reduce((previous, next) => previous + next, 0)) / this.marks.length;
  }
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
