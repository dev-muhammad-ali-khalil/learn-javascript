let firstScore = "33abc";
let valueInFirstNumber = Number(firstScore); //Javascript conversion method
console.log(valueInFirstNumber); //Return NaN because the conversion value is not a pure number

let secondScore = "33";
let valueInSecondNumber = BigInt(secondScore);
console.log(valueInSecondNumber);

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);