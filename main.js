let grade = 94

if (grade >= 90) {
  console.log("great job!")
} else {
  console.log("you could do better!")
}


switch (grade) {
  case 90:
  case 91:
  case 92:
  case 93:
  case 94:
  case 95:
  case 96:
  case 97:
  case 97:
  case 99:
  case 100:
    console.log("great job!")
    break;
  default:
    console.log("you could do better!")
}


let letter = "s"

if (letter == "a" || letter == "e" || letter == "o") {
  console.log("thats a vowel. you've got to buy that.")
} else if (letter == "i" || letter == "u") {
  console.log("thats a vowel. you've got to buy that.")
} else {
  console.log("thats a consonant for $200")
}

switch (letter) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    console.log("thats a vowel. you've got to buy that.")
    break;
  default:
    console.log("thats a consonant for $200")
    break;
}

switch (window.prompt("What do you want to do?")) {
  case "help":
    window.alert("you can 'look', 'go', and 'take'")
    break;
  case "go":
    window.alert("where do you want to go")
    break;
  case "look":
    window.alert("youre sitting in class right now")
    break;
  case "take":
    2 + 2
    break;
  default:
    window.alert("that's not a valid command")
}


let me = {
  firstName: "porter",
  lastName: "wilcox",
  age: 23
}

me.family = []

console.log(me)

// function declaration
function minusNumbers(number1, number2) {
  if (number1 > number2) {
    return number1 - number2
  }
  return number2 - number1
}

// function invokation aka execution
minusNumbers(3, 8)

function addFamilyMember(firstName, lastName, age) {
  // create a person object like myself and add that person to my family array
  let newPerson = {
    firstName,
    lastName,
    age
  }
  me.family.push(newPerson)
}


for (let counter = 0; counter <= 10; counter++) {
  if (counter % 2 == 0) {
    console.log(counter)
  }
}
// continues execution


let counter = 0
while (counter <= 100) {
  if (counter % 2 != 0) {
    console.log(counter)
  }
  counter += 3
}


//do whiles run at least once!
counter = 100
do {
  console.log(counter)
  counter--
} while (counter > 1000)



let foodItems = ["cheese", "tomatoes", "carrots", "rice"]

for (let i = 0; i < foodItems.length; i++) {
  console.log(foodItems[i])
}

let myFavNum = 4

for (let i = 0; i < 1000; i++) {
  if (i == myFavNum) {
    console.log("your fav number is", i)
    break
  }
  console.log(i)
}

for (let i = 0; i < 1000; i++) {
  if (i % 3 == 0) {
    console.log("evenly divisible by three")
    continue
  }
  console.log(i)
}




