/*Задача 3: Да се изведат на екрана всички нечетни числа от -10
до 10 */

for (let num = -10; num <= 10; num++) {
    if (num % 2 !== 0) {
        console.log(num);
    }
};