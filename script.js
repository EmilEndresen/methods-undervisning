//STRING METHODS

let string = "Dette er en string med ca >> tegn"
let length = string.length

console.log(length)

// charAt lets you find a character at the specified location
let charAt = string.charAt(27)
console.log(charAt)

// at lets you find a character at the specified location,
// but you can also use negative index
let at = string.at(27)
console.log(at)

// charCodeAt returnerer hvilken UTF-16 kode tegnet vi velger har.
let charCode = string.charCodeAt(27)
console.log(charCode)

// Property access might be a little unpredictable:

// It makes strings look like arrays (but they are not)
// If no character is found, [ ] returns undefined, while charAt() returns an empty string.
// It is read only. str[0] = "A" gives no error (but does not work!)
let char = string[6]
console.log(char)

const upperCase = document.getElementById("uppercase")
const lowerCase = document.querySelector("#lowercase")

upperCase.innerText = "hello there".toUpperCase()
lowerCase.innerText = "HELLO THERE".toLowerCase()

let text1 = "Slå"
let text2 = "sammen"
let text3 = "strings"

let text4 = text1.concat(" ", text2, " ", text3)

const concat = document.getElementById("concat")

// concat.innerText = text4

let trimming = "                  Fjern mellomrommene                   "
let trimmed = trimming.trim()
console.log(trimmed)

//ARRAY METHODS
const hobbies = [
   "Coding",
   "Fisking",
   "DnD",
   "Gaming",
   "Lesing",
   "Pokemon kort",
   "Sykling"
]

let hobbiesLength = hobbies.length
console.log(hobbiesLength)

console.log(hobbies)

let hobbystring = hobbies.toString()
console.log(hobbystring)

let joinedHobbies = hobbies.join(", ")
console.log(joinedHobbies)

const carBrands = [
   "BMW",
   "Mazda",
   "Nissan",
   "Ford",
   "Mitsubishi",
   "Saab",
   "Opel",
   "Porsche",
   "McLaren",
   "Ferrari"
]

if (carBrands.length >= 10) {
   console.log(carBrands[4])
} else {
   console.log("Litt for mange biler der du")
}

let poppedCar = carBrands.pop()
console.log(poppedCar)
console.log(carBrands)

carBrands.push("Volkswagen")
console.log(carBrands)

let shiftedCar = carBrands.shift()

console.log(shiftedCar)
console.log(carBrands)

carBrands.unshift("Tesla")
console.log(carBrands)

console.log(carBrands[1])

let names = ["Emil", "Camilla", "Thoralf", "Torgeir", "Jens"]
let moreNames = ["Monica", "Mats", "Cristiano Ronaldo"]
names[names.length] = "Kåre Jonny"
names[names.length] = "Bjørn Are"

console.log(names)

//DO NOT DO THIS
// delete names[0]
// console.log(names)

const concatNames = names.concat(moreNames)
console.log(concatNames)

concatNames.splice(3, 5)
console.log(concatNames)

concatNames.splice(3, 0, "Messi", "Rashford")
console.log(concatNames)

let cities = ["Bergen", "Tulsa", "Haugesund", "Oslo", "San Diego"]
let newCities = cities.slice(1, 3)
console.log(newCities)

console.log(cities)

//NUMBER METHODS
let number = 52
console.log(number)
console.log(number.toString())

let x = 47.4568344

console.log(x.toExponential(2))
console.log(x.toFixed(2))
console.log(x.toPrecision(4))
