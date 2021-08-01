const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

//Створіть функцію getMyTaxes.call(country, salary) -> number; 
//– яка рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн. 
//Функція повинна викликатись через call та працювати з даними через this

function getMyTaxes(salary) {
    return this.tax * salary;
}

console.log('task 1. Tax amount: ', getMyTaxes.call(ukraine, 1500));

//Створіть функцію getMiddleTaxes.call(country) -> number; 
//яка рахує скільки у середньому податків платятт IT-спеціалісти у кожній країні. (tax * middleSalary).
//Функція повинна викликатись через call та працювати з даними через this

function getMiddleTaxes() {
    return this.tax * this.middleSalary;
}

console.log('task 2. Average tax amount: ', getMiddleTaxes.call(litva));

//Створіть функцію getTotalTaxes.call(country) -> number; 
//– яка рахує, скільки всього податків платять IT-спеціалісти у кожній країні. (tax * middleSalary * vacancies).
//Функція повинна викликатись через call та працювати з даними через this

function getTotalTaxes() {
    return this.tax * this.middleSalary * this.vacancies;
}

console.log('task 3. Total tax amount: ', getTotalTaxes.call(latvia));

//Створіть функцію getMySalary(country) 
//– яка буде писати в консоль об'єкт виду: { salary: number, taxes: number, profit: number } кожні 10 секунд. 
//Значення salary – генеруйте випадковим чином у діапазоні 1500-2000. 
//taxes – розраховується в залежності від вибраної країни та значення salary. profit = salary - taxes;

function getMySalary() {

        const randomSalary = +(Math.random() * (2000 - 1500) + 1500).toFixed(2);
        const tax = this.tax;
        const profit = +(randomSalary * (1 - tax)).toFixed(2);
        const mySalary = {
            salary: randomSalary,
            taxes: tax,
            profit: profit
        }
        console.log(mySalary);
}
   
setInterval(() => { getMySalary.call(ukraine); }, 10000);

export { ukraine, getMyTaxes };




