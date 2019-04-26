let name = 'Rein'
console.log(name) // 'Rein'

let copy = name
console.log(copy) // 'Rein'

name = "Gerrit"
console.log(name) // 'Gerrit'
console.log(copy) // 'Rein

// Composite datatypes e.g. Array
let students = [
    'Nataliya',
    'Tom',
    'Drashti'
]
console.log(students)

let shadowStudents = students
console.log(shadowStudents)

students[0] = 'Rafael'
console.log(students)
console.log(shadowStudents)