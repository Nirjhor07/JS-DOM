// const child = document.querySelectorAll("section");
// console.log(child);

// const child1 = document.querySelector("#hudai");
// console.log(child1);

const food = document.querySelector("#food");
console.log(food);

//acces to the child

console.log(food.childNodes[1].childNodes[0]);
console.log(food.childNodes[3].childNodes[0]);

// creating new elemts
const newChild = document.createElement("li");
newChild.innerText = "Tuna Mach";

// appending new elements
food.append(newChild);
