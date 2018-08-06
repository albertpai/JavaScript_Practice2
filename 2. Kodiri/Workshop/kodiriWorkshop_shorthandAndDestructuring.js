// Shorthand of object.
this.setState({shows});
this.setState({shows: shows});


// Destructing an array.
let fruits = ['apple', 'orange']
let [fruit1, fruit2] = fruits

console.log(`I like to eat ${fruit1} and ${fruit2}.`)


// Destructing an object.
let animals = {
    cat: 3,
    dog: 2,
    bird: 5
};

let {cat, dog, bird} = animals;

console.log(`I have ${cat} cats, ${dog} dogs and ${bird} birds.`)


// Destructing an object. Change the order.
let animals = {
    cat: 3,
    dog: 2,
    bird: 5
};

let {bird, dog, cat} = animals;

console.log(`I have ${cat} cats, ${dog} dogs and ${bird} birds.`)


// Changing the keys will render undefined.
let animals = {
    cat: 3,
    dog: 2,
    bird: 5
};

let {a, b, c} = animals;

console.log(`I have ${a} cats, ${b} dogs and ${c} birds.`)


// Test spread syntax.
let fruits = ['apple', 'orange', 'grapes']
let [...fruit] = fruits

console.log(`${fruit}.`)


// Normal way for logging object values.
function hello(user){
    return console.log(`hello, ${user.firstName} ${user.lastName}.`);
}

hello({
    firstName: 'Donald',
    lastName: 'Trump'
})


// Call values by destructuring an object.
function hello({firstName, lastName}){
    return console.log(`hello, ${firstName} ${lastName}.`);
}

hello({
    firstName: 'Donald',
    lastName: 'Trump'
})