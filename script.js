const addNewName = document.getElementById("add-name");
const inputField = document.getElementById("text-holder");
const myList = document.getElementById("myList");

addNewName.addEventListener("click", () => {
  const newName = document.createElement("li");
  newName.innerHTML = inputField.value;
  myList.appendChild(newName);
  inputField.value = "";
});
