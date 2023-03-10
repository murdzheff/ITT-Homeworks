/* Задача 19: Да се състави програма, чрез която по въведено
естествено число от интервала [10..99] се извежда поредица
числа, при спазване на следните изисквания:
1) ако предходното число е четно се извежда 0.5*числото;
2) ако предходното число е нечетно се извежда 3*числото +1.
Извеждането продължава докато не се получи стойност 1.
Пример: 11
Изход: 34 17 52 26 13 40 20 10 5 16 8 4 2 1. */

let number = 11;
let result = "";

do {
    if (number % 2 === 0) {
        number = number * 0.5;
    } else {
        number = number * 3 + 1;
    };
    result += number + " ";
} while (number !== 1);

console.log(result);