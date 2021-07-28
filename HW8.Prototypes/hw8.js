//1.У стдентів повинні бути наступні властивості: university, course, fullName, 
//вони передаються при створенні студента(в конструктор).

class Student {
    constructor(university, course, fullName) {
      this.university = university;
      this.course = course;
      this.fullName = fullName;
      this.marks = [5, 4, 4, 5];
    }

//2.Створіть метод this.getInfo() -> "Студент 1го курсу Вищої Школи Психотерапії м.Одеса, 
//Остап Родоманський Бендер", метод повертає сукупну інформацію про курс, учбовий заклад та імені студента.

    getInfo() {
        return `Student's info: course - ${this.course}, 
                university - ${this.university}, 
                name - ${this.fullName}`;
    }

//3.Створіть геттер оцінок this.marks, який повертає масив оцінок студента [5, 4, 4, 5]

    get getMarks() {
        if (this.dismiss) {
            return null;
        } else {
            return this.marks;
        }
    }

//4.Створіть сеттер оцінок this.marks = 5, який дозволяє поставити оцінку студенту. 
//Після того, як оцінка поставлена, геттер повинен повернути масив this.marks -> [5, 4, 4, 5, 5]

    set setMarks(newMark) {
        if (this.dismiss) {
            return null;
        } else {
            this.marks = [...this.marks, newMark]
            return this.marks;
        }
    }

//5.Створіть метод отримання середнього балу this.getAverageMark() -> 4.6

    getAverageMark() {
        if (this.dismiss) {
            return null;
        } else {
            return this.marks.reduce((a, b) => a + b) / this.marks.length;
        }
    }

//6.Створіть метод this.dismiss, який "виключить" студента. 
//Після виклику цього методу – ставити студенту оцінки та отримувати їх більше не можна. 
//(Ніяких помилок, просто повертається завжди null замість масиву оцінок)

    getDismissed() {
        this.dismiss = true;
    }

//7.Створіть метод this.recover, який дозволить поновити студента

    getRecovered() {
        this.dismiss = false;
    }

}

const ostap = new Student(
    "Вищa Школa Психотерапії м.Одеса",
    "1",
    "Остап Родоманський Бендер"
);

console.log('task1. ', ostap.getInfo());
console.log('task2. Marks: ', ostap.getMarks);
ostap.setMarks = 5
console.log('task3. New marks: ', ostap.getMarks);
console.log('task4. Average mark', ostap.getAverageMark());
ostap.getDismissed();
console.log('task5. Marks of dismissed student: ', ostap.getMarks);
ostap.getRecovered();
console.log('task6. Marks of recovered student: ', ostap.getMarks);

//Advanced

class BudgetStudent extends Student {
    constructor(university, course, fullName) {
      super(university, course, fullName);
      this.marks = [5, 4, 4, 5];
      setInterval(() => console.log(this.getScholarship()), 30000);
    }

    getScholarship() {
        const scholarshipSum = 1400;

        if (this.dismissed || this.getAverageMark() < 4) {
            return 'No scholarship'
        } else {
            return `Ви отримали ${scholarshipSum} грн. стипендії`
        }
    }
}

const john = new BudgetStudent(
    "Harvard",
    "2",
    "John Doe"
);


