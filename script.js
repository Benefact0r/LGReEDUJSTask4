console.log('src');

// 1. Arrow Function და ორი რიცხვის დაჯამება:
const AddNumber = (xaNum, yaNum) => xaNum+yaNum ;
console.log(AddNumber(5,7));

// 2. დაწერე Anonymous ფუნქცია:
const SubNumber = function(xbNum,ybNum) {
    return xbNum-ybNum
}
console.log(SubNumber(7,5));

// 3. Arrow Function :
function GetNumberT(numberT) {
    console.log(numberT %2 === 0);
}
GetNumberT(12)

// 4. Callback Function და გამრავლება:
function DoubleNumber(callback) {
    const num1 = 5
    return callback(num1)
}

function DoubledNumber(num1) {
    return num1*2
}

console.log(DoubleNumber(DoubledNumber));

// 5. Arrow Function და რიცხვის დადებითობის შემოწმება:
const IsPositive = (xeNum) => xeNum > 0 ;
console.log(IsPositive(-5));

// 6. დაწერე Anonymous ფუნქცია :
const MultNumber = function(xfNum,yfNum) {
    return xfNum*yfNum
}
console.log(MultNumber(5,7));

// 7. დაწერე ფუნქცია, რომელიც მიიღებს რიცხვს და Callback ფუნქცია:
function DoubleNumber(callback) {
    const numberDouble = 5
    return numberDouble*2
}

function GetDoubledNumber(numberDouble) {
    return numberDouble
}

console.log(DoubleNumber(GetDoubledNumber));


// 8. Arrow Function და რიცხვის ნაშთის შემოწმება:
function GetNumberT(numberT) {
    console.log(numberT %3 === 0);
}
GetNumberT(9)

// 9. Callback Function და რიცხვის გადამოწმება:
function EvenNumber(callback) {
    const evenNumber = 70;
    return callback(evenNumber)
}

function EvenNumberChecker(evenNumber) {
    console.log(`Task9`);
    console.log(evenNumber %2 ===0);
}

EvenNumber(EvenNumberChecker);

// 10. Arrow Function და რიცხვის კუბის გამოთვლა:
const numberCuber = (numberToCube) => numberToCube*numberToCube*numberToCube;
console.log(numberCuber(25));


// 11. Callback Function და მარტივი გამრავლება:
function NumberToMultiplay(callback) {
    const numMultix = 5;
    const numMultiy = 7;
    return callback(numMultix,numMultiy)
}

function MultiplayerNumber(numMultix,numMultiy) {
    console.log(numMultix*numMultiy);
}

NumberToMultiplay(MultiplayerNumber);


// 12. Arrow Function და რიცხვის დადებითობის შემოწმება:
const isGreaterThanZero = (num) => num > 0;
console.log(isGreaterThanZero(100));

// 13. დაწერე Anonymous ფუნქცია
const DiviNumber = function(xgNum) {
    return xgNum/2;
}
console.log(DiviNumber(5));


// 14. Callback ფუნქცია, რომელიც შეაჯამებს ამ რიცხვებს.
function MultiNumber(callback) {
    const xnum = 50;
    const ynum = 70;
    return callback(xnum, ynum)
}

function GetMultiNumber(xnum,ynum) {
    console.log(xnum*ynum);
}

MultiNumber(GetMultiNumber);


// 15. Arrow Function, რომელიც მიიღებს ერთ რიცხვს და დააბრუნებს მის კვადრატს.
const squarNumber = xnum => xnum*xnum;
console.log(squarNumber(5));
