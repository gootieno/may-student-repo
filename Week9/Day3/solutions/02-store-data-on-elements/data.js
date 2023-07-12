// Your code here
/*
    listen for dom content loaded
    select #add button 
    select the ul element
    create li element
    set the data-type attibute on li element
        value from #type input
    li text value form #name element

    go to css add attribute selected styles
*/

window.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById("add");
  const shoppingListContainer = document.getElementById("shopping-list");

  addButton.addEventListener("click", (event) => {
    console.log("in the submit event ", event);
    event.preventDefault();

    const shoppingListItem = document.createElement("li");

    const name = document.getElementById("name");
    const type = document.getElementById("type");

    shoppingListItem.setAttribute('data-type', type.value)
    shoppingListItem.innerText = name.value

    console.log('shopping list item ', shoppingListItem)
    shoppingListContainer.appendChild(shoppingListItem)

    name.value = ""
  });
});
