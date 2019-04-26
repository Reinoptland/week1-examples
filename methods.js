// Examples of built in methods
// Math.random()
// console.log()
// console.log(console)

// Creating your own methods
const mrSniffles = {
    name: "mr Sniffles",
    age: 4,
    bark: function(){
        console.log('woof Woof')
    },
    dontDoThat: function(){
        console.log(this.name, ' NO!')
    }
}

mrSniffles.bark()
mrSniffles.dontDoThat()