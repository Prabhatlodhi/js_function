// let a = 5;
// let b = 7;

// let result = a+b;
// console.log(result);


// function addNumber (){
//     console.log(5 + 7)
// }

// addNumber()
// addNumber()
// addNumber()
// addNumber()

// My name is .................

//Parameter and arguments


// let a = 54;
// let b = 22;

// function addNumber (num1, num2){ 
//     return num1 + num2;
// }

// console.log(addNumber(5,6))
// console.log(addNumber(a,b))


// function smoothieMaker(banana, berries){
//     console.log(banana, berries)
//  const smoothie = `Smoothie with ${banana} banana and ${berries} berries.`
//  return smoothie
// }

// console.log(smoothieMaker(5,2))


// const greet = function (){
//     console.log("Hello World");
// };

// console.log(greet)
// console.log(greet())


// const greet = ()=>  console.log("Hi"); 

// console.log(greet());

// const add = (a,b) => {
//  console.log(a+b);
//  console.log(a*b);
// }
// add(3,4)


// IIFE
// (function () {
//     console.log("Hello");
// })();


// function doHomework (subject, callback){
//     // console.log(callback);
//     console.log("Starting my " + subject + " homework.");
//     callback()
// }

// function finishHomework(){
//     console.log("Finished my homework");
// }

// doHomework("English", finishHomework)



function calculator(number1, number2, cb1, cb2){ 
    let subs = cb2(number1, number2);
    console.log( "Substract", subs);
    return cb1(number1, number2)
}

function addNum(a,b){
    return a+b;
}

function substract(a,b){
    return a-b;
}

// function multiplication(a,b){
//     return a*b;
// }

let result1 = calculator(15, 9, addNum, substract);
console.log( "Sum ", result1);

// let result2 = calculator(15, 9, substract);
// console.log( "Substract ", result2);

// let result3 = calculator(15, 9, multiplication);
// console.log( "Multiplication ====> ", result3);


// function performOperation (number, operation){
//     return operation(number);
// }

// function double(number){
//     return number*2;
// }

// let result = performOperation(11, double);
// console.log( "I have double the given number", result);


// function makeTea(ingredient, prepareIngredient){
//     const preparedIngredient = prepareIngredient(ingredient)
//     return `Tea with ${preparedIngredient} `
// }

// function addTeaLeaves(teaLeaves){
//     return ` ${teaLeaves} spoon of tea leaves.`
// };

// function addSugar(sugar){
//     return ` ${sugar} spoon of sugar.`
// };

// let leafyTea = makeTea(1, addTeaLeaves);
// console.log(leafyTea);
// let sugarTea = makeTea(2, addSugar);
// console.log(sugarTea);


// function addNumber (number1, number2, harshit){
//     console.log(harshit);
//     const sum = number1 + number2;
//     harshit(sum);
// };


// function displayResult(result){
//     console.log(`The result is : ${result}. `);
// }

// addNumber(5,7, displayResult)
