// Name changes when the button is clicked
document.getElementById("name-click").addEventListener("click", function () {
  //   console.log("im clicked");
  const nameChange = document.getElementById("nameIs");
  nameChange.innerText = "Nirjhor Akash";
});

//dynamically change the webpage innertext 
document.getElementById("Update-name").addEventListener("click", function () {
  //   console.log("clicked the update btn");
  const nameInput = document.getElementById("inputName");
  //   console.log(nameInput.value);
  //getting the name input value
  const nameValueInput = nameInput.value;
  //get the prev name in the p tag
  const name = document.getElementById("fieldToBeChanged");
  // setting the new value taken from input field and putting it into the p
  name.innerText = nameValueInput;
});
