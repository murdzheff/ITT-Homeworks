/**Да се състави програма, която по въведено
естествено число N от интервала [10..200] извежда в обратен
ред всички числа, които са кратни на 7 и са по-малки от N. */

let num = Math.floor(Math.random() * (200 - 10 + 1) + 10);
console.log("Input is: " + num);
let numStr = "";
for (i = num; i >=10 ; i--) {
    if (i % 7 == 0 && i < num) {
        console.log(i);
    };
};