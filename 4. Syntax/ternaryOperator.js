//
function getFee(isMember) {
    return (isMember ? "$2.00" : "$10.00");
}

console.log(getFee(true));
console.log(getFee(false));
console.log(getFee(1));


//
var age = 26
var canDrinkAlcohol = (age > 21)? 'Yes, you can' : "No, you cannot"
console.log(canDrinkAlcohol)


// display a different message
var isMember = true
console.log('The fee is ' + (isMember ? '$2.00' : '$10.00'));


// assign variables depending on a ternary result
var elvisLives = Math.PI > 4 ? 'Yep' : 'Nope';
console.log(elvisLives)


// Multiple ternary evaluations.
// conditional operator is right associative)
var firstCheck = false,
    secondCheck = false,
    access = firstCheck ? 'Access denied': secondCheck ? 'Access denied' : 'Accessed granted';
console.log(access);


// Multiple-conditions
var condition1 = true,
    condition2 = false,
    access = condition1 ? (condition2 ? 'true true': 'true false') : (condition2 ? 'false true': 'false false')
console.log(access);


// Parentheses are not required, and do not affect the functionality
var condition1 = true,
    condition2 = false,
    access = condition1 ? condition2 ? 'true true': 'true false' : condition2 ? 'false true': 'false false'
console.log(access);


// use ternary evaluations in free space
var stop = false, age = 16;
age > 18 ? location.assign('continue.html') : stop = true;


// one single operation per case, separating them with a comma, and enclosing them in parenthesis.
var stop = false, age = 23;
age > 18 ? (
    console.log('Okay, you can go.')
    // location.assign('continue.html')
) : (
    stop = true,
    console.log('Sorry, you are much too young')
)


// more than one operation
// the last comma-separated value of the parenthesis will be the value to be assigned
var age = 16;

var url = age > 18 ? (
    console.log('OK, you can go.'), 
    // alert returns "undefined", but it will be ignored because
    // isn't the last comma-separated value of the parenthesis
    'continue.html' // the value to be assigned if age > 18
) : (
    console.log('You are much too young!'),
    console.log('Sorry :-('),
    // etc. etc.
    'stop.html' // the value to be assigned if !(age > 18)
);

console.log(url); // "stop.html"


// Returning Ternary Statements
var func2 = function (){
    return condition1 ? value1 : value2
}


// Returning value
function canDrinkAlcohol (age){
    return (age > 21) ? "True, over 21" : "False, under 21";
}
var output = canDrinkAlcohol(26);
console.log(output); 


// replace a lengthy series of if/else statements
// limit the use of return
var func2 = function (){
    return condition1 ? value1
        :  condition2 ? value2
        :  condition3 ? value3
        :               value4
}
