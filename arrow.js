// function doubleIt(num){
//     return num *2;
// }
// const dblIt = doubleIt(5);
// console.log(dblIt);

// const doubleIt = function (num) {
//     return num *2;
// }
// console.log(doubleIt(2));

// const dblIt = num => num*2 ;
// console.log(dblIt(5));

// const fullName =(firstName,lastName) => `${firstName} ${lastName}`;
// console.log(fullName('Saddam','Hossain'));

const doMath = (x,y) => {
    const sum = x + y;
    const sub = x - y;
    const multiply = sub * sum ;
    return multiply;
}
const result = doMath(5,4);
console.log(result);