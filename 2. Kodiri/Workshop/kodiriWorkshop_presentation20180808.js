{
    1. Alternative way to solve the Whiteboard Challenge

    1.1. Norbert's solution

    let wild = {
        a: 1,
        b: {
            c: 2,
            d: {
                e: 7,
                f: {
                    g: -2,
                    h: 5
                }
            }
        }
    }

    function sum(obj) {
        return Object.values(obj).reduce((acc, val) => {
            if (isNaN(val)) {
                return acc = acc + sum(val) // if object
            } else {
                return acc = acc + val   // if number
            }
        }, 0)
    }

    console.log(sum(wild))

    1.2. Different ways to access object values
    const car = {
        make: 'Ford',
        model: 'Fiesta',
        color: 'Red'
    };

    console.log(car.make)
    console.log(car[make])
    console.log(car['make'])

    Check how to use Reduce to make a tally of stuffs

    1.3. for ... in loop

    const object = {
        a: 'Donald Trump',
        b: 'Theresa May',
        c: 'Vladimir Putin'
    }

    console.log(Object.keys(object))

    for (var name in object) {
        console.log(name)
    }

    for (var name in object) {
        console.log(object[name])
    }

    1.4. Using for ... in loop in the whiteboard challenge

    let wild = {
        a: 1,
        b: {
            c: 2,
            d: {
                e: 7,
                f: {
                    g: -2,
                    h: 5
                    }
                }
            }
        }

    for (var i in wild) {
        console.log(wild[i])
    }


    1.5. Alternative solution

    const wild = {
        a: 1,
        b: {
            c: 2,
            d: {
                e: 7,
                f: {
                    g: -2,
                    h: 5
                    }
                }
            }
        }

    function add(nest) {
        let sum = 0;
        for (var i in nest) {
            if (!isNaN(nest[i])) {
                sum += nest[i]
            }
            else {
                sum += add(nest[i])
            }
        }
        return sum
    }

    console.log(add(wild))

    1.6. MDN's cautiion:
    
    The order of iteration is implementation - dependent.
    Choose forEach or for...of loop when the order of access is important.

    ===========================================================

    2. Alternative solutions - Getting the biggest difference in a number string

    2.1. Using map and sort

    https://youtu.be/EynPW39sXPA?t=13m48s

    function getBiggestDiff(string) {
        let sortedDigits = string
            .split('')
            .map(Number)
            .sort();
        let lastDigit = sortedDigits[sortedDigits.length - 1]       ;     
        let firstDigit = sortedDigits[0];
        return lastDigit - firstDigit
    }

    console.log(getBiggestDiff('1361645385'))

    2.2. Alternative solution - using built -in methods

    function getBiggestDiff(string) {
        let newStr = string.split('')
        return Math.max(...newStr) - Math.min(...newStr)
    }

    console.log(getBiggestDiff('1361645385'))

    ===========================================================

    3. Alternative solution - Get Divisible Values

    3.1. Using a for loop
    
    https://youtu.be/EynPW39sXPA?t=23m47s

    function getDivisibleValues(number) {
        let divisibleValues = [];
        for (let i = 1; i <= number; i++){
            if (number % i === 0){
                divisibleValues.push(i);
            }
        }
        return divisibleValues
    }
    console.log(getDivisibleValues(12))
    
    3.2. Syntax of Array.from

    Array.from('foo');
    Array.from([1, 2, 3], x => x * 2);

    3.3. Syntax of Array

    Array(5)

    3.4. Alternative solution - Using Array.from and filter

    function getDivisibleValues(number) {
        return Array.from(Array(number), (_,index)=> index + 1)
                    .filter (value => number % value === 0 )
        }
    console.log(getDivisibleValues(15))

    https://jsperf.com/constarray/4
}