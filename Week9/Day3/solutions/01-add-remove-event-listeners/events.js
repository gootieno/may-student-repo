// Your code here
window.addEventListener("DOMContentLoaded", () => {
  // alert('Dom has loaded!')

  /*
        select the input element
        listen for input event
        if input value contains red 
            set background red
        else 
            set background transparent
    */
  const redInput = document.getElementById("red-input");
  const changeRed = (event) => {
    // console.log("input event target", event.target.value);
    // console.log("red input value ", redInput.value);
    if (event.target.value.toLowerCase().includes("red")) {
      redInput.style.backgroundColor = "red";
      //   redInput.setAttribute('class', 'red-background')
    } else {
      redInput.style.backgroundColor = "transparent";
    }
  };

  redInput.addEventListener("input", changeRed);

  /*
     select #add-item 
     select #list-add
     
     create an li
     select ul
     li inner text to list add val
     append li to ul
  */
  const addItem = document.getElementById("add-item");
  const listAdd = document.getElementById("list-add");

  const createList = () => {
    const value = listAdd.value;

    const ul = document.querySelector("#section-2 > ul");
    const li = document.createElement("li");

    li.innerText = value;
    ul.appendChild(li);

    listAdd.value = "";
  };

  addItem.addEventListener("click", createList);

  /*
    select #color-select element
    listen to input change
    select background element?
    change background color of background element to input color
  */
  const colorSelect = document.getElementById("color-select");
  const backgroundSection = document.getElementById("section-3");
  const changeSectionColor = () => {
    backgroundSection.style.backgroundColor = colorSelect.value;
  };
  colorSelect.addEventListener("change", changeSectionColor);

  const removeListeners = document.getElementById("remove-listeners");
  removeListeners.addEventListener("click", () => {

    redInput.removeEventListener("input", changeRed);
    addItem.removeEventListener("click", createList);
    colorSelect.removeEventListener("change", changeSectionColor);

  });

  const addButton = document.createElement("button");
  addButton.addEventListener("click", () => {
    redInput.addEventListener("input", changeRed);
    addItem.addEventListener("click", createList);
    colorSelect.addEventListener("change", changeSectionColor);
  });

  addButton.innerText = "Add Button";
  document.body.append(addButton);

  const newSection = document.createElement("section");
  const div = document.createElement("div");

  newSection.addEventListener("mouseover", () => {
    div.innerText = "Hovering";

    //fetch cat here
  });

  newSection.append(div);
  document.body.append(newSection);

  document.addEventListener("keydown", (event) => {
    if (event.keyCode === 32) {
      alert("spacebar has been pressed");
    }
  });
});
