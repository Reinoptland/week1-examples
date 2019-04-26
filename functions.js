// defining a function
// function name (parameters)
function greet(message) {
    console.log('hello! ' + message)
    // return an expression
    return 'hi'
}

// calling
// name (arguments)
greet('world')

// const returnValue = greet('world')
// console.log(returnValue)

const myAnonymousFunction = function(){
    console.log('I AM ANONYMOUS!')
}

myAnonymousFunction()

const students = ['Tom', 'Pieter', 'Andrea']

// Using an anynmous function as a callback
// forEach is a higher order function that takes a funciton
// as an argument
students.forEach(function(student){
    console.log('hello ' + student)
})

students.forEach(student => console.log(student))








