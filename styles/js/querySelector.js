//qurey selector all
const sections = document.querySelectorAll("section");
console.log(sections);
// for (const section of sections) {
//   console.log(section);
//   //adding styles to the section
//   section.style.backgroundColor = "lightgreen";
//   section.style.padding = "20px";
//   section.style.marginBottom = "18px";
//   section.style.fontSize = "1.25rem";
//   //   section.style.fontFamily = 'timesNewRoman'
//   //   section.style.animation = "toggle 0.5s ease-in-out";
//   section.style.borderRadius = "15px";
//   section.style.textAlign = "justify";
// }

for (const section of sections) {
  section.classList.add("styles");
}
// this block will execute bcz the section #hudai has the class '.styles'
// const specifcSection = document.querySelector("#hudai");
// console.log(specifcSection);
// if (specifcSection.classList.contains("styles")) {
//   specifcSection.classList.toggle("styles");
// } else {
//   console.log("do nothing");
// }
