// Reduce in conventional form.
function sum(array) {
    return array.reduce(function (total, value) {
        return total + value
    }, 0)
}
console.log(sum([2, 4, 1, 5]));


// Reduce in arrow function.
function sum(array) {
    return array.reduce((total, value) => total + value)
}
console.log(sum([2, 4, 1, 5]));
