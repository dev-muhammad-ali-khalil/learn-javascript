//Primitive data types

let name = "Ali"; //String data type
let age = 24; //Numeric data type
let authKey = 1234567890123456789012345678901234567890n; //BigInt data type for large integers
let isOnline = true; //Boolean data type
let empty = null; //Standalone value [Empty value]
let notDefined = undefined; //No value

//Non-primitive data types

let object = {
    name: "Ali",
    age: 24,
    isOnline: true,
    empty: null,
    notDefined: undefined
}

let array = ["Ali", "Asad", "Asadullah", "Bilal", "Mudassir", "Saweed"];

function greet() {
    console.log("Hi, Ali")
}

//To check the datatype of any variable or value directly, use typeof() function.
console.log(typeof (authKey));