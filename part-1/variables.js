const accountId = 144001;
let accountEmail = "ali@gmail.com";
var accountPassword = "@Ali12345";
// var should not be used because it is a functional scoped not a blocked scope. Insted, use let which is a blocked scoped variable and const for constants.

//Javascript allows to declare variables without datatype, but it is not recommended.
accountCcountry = "Pakistan";
//If we declare a variable without initialization then it will be considered undefined.
let accountCity;

console.table([accountId, accountEmail, accountPassword, accountCcountry, accountCity]);