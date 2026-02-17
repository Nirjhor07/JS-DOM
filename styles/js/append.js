//return HTML collections
// const allSection = document.getElementsByTagName("section");
// console.log(allSection);
// for (const section of allSection) {
//   console.log(section);
// }

//return the nodelist
// const allSection = document.querySelectorAll("section");
// console.log(allSection);
// for (const section of allSection) {
//   console.log(section);
// }

//return the only element i search for
//finding the parent first
const searchById = document.querySelector("#sports");
console.log(searchById);

//creating the list
const li1 = document.createElement("li");
li1.innerText = "Valorant";

//append the child
searchById.appendChild(li1);

// again now we will add a new section and ul and list as well

//creatted new section
const newSec = document.createElement("section");

// finding the parent
// const parentMain = document.getElementsByClassName("mainCls");
// console.log(parentMain);
// for (const main of parentMain) {
//   console.log(main);
// }

// finding the parent
const parentMain = document.getElementById("mainCls");

//apend the new section to the main cls
parentMain.appendChild(newSec);

// create a h1 for the newSec
const h1 = document.createElement("h1");
h1.innerText = "This is creatted using javascript DOM manupulations";

// now append the new h1 to the newSec
newSec.appendChild(h1);

//create new ul for the newSec
const ul = document.createElement("ul");

//apend new ul to the newSec
newSec.appendChild(ul);

//create new Li for the newSec
const li2 = document.createElement("li");
li2.innerText = "Nirjhor";

// apend new li to the new Ul of newSec
ul.appendChild(li2);

//create another li
const li3 = document.createElement("li");
li3.innerText = "Akash";

// Append to the ul of newSec
ul.appendChild(li3);

// different way to the same task but in easier way
//craete section
const newSec1 = document.createElement("section");

// apend the newSec1 to the main cls
parentMain.appendChild(newSec1);

//now create elements for the newSec1
newSec1.innerHTML = `
<h1>This is the end!!</h1>
<ul>
    <li>Mouse</li>
    <li>Monitor</li>
    <li>Pc</li>
    <li>Graphics card</li>
</ul>

`;
