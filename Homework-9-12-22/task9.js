/*Да се прочетат 2 числа от клавиатурата А и В.
Да се изведат всички числа от А до В на степен 2(разделени с
запетая).Ако някое число е кратно на 3, да се изведе съобщение че
числото се пропуска „skip 3“.Ако сумата от всички изведени числа (без
пропуснатите) стане по-голяма от 200, да се прекрати извеждането. */

let a = 1;
let b = 10;
let sum = 0;
let aStr = "";



for (let i = a; i <= b; i++) {
    
    if ( i % 3 === 0 & sum <= 200) {
        aStr += "skip" + i + ", ";
        
    } else if (sum <= 200){
        sum += i ** 2;
        if (i !== 10) {
        aStr += sum + ", ";
        } else {
            aStr += sum;
        };
    };

    
    
};


console.log(aStr);







