const select = () => {
  /* Write queries for each of the following */

  /* Section 1 */
  // 1. Get all seeded fruit elements
  // Your code here
  const seeded = document.getElementsByClassName("seed");
  console.log("seeded ", seeded);
  // 2. Get all seedless fruit elements
  // Your code here
  const seedLessFruits = document.querySelectorAll(".seedless");
  console.log("seedless fruits ", seedLessFruits);
  // 3. Get first seedless fruit element
  // Your code here
  const firstSeedLessFruit = document.querySelectorAll(".seedless");
  console.log("first seedless fruit ", firstSeedLessFruit[0]);

  /* Section 2 */
  // 4. Get inner span with text "you"
  // Your code here
  const span = document.querySelector("#wrapper span");
  console.log("span inner text ", span.innerText);
  // 5. Get all children of element "wrapper"
  // Your code here
  const kids = document.querySelector("#wrapper").children;
  console.log("#wrapper kids ", kids);
  //   console.log(inner);

  // 6. Get all odd number list items in the list
  // Your code here
  const oddNumbers = document.querySelectorAll(".odd");
  console.log("odd numbers ", oddNumbers);
  // 7. Get all even number list items in the list
  // Your code here
  let even = [];
  for (let i = 0; i < oddNumbers.length; i++) {
    even.push(oddNumbers[i].nextElementSibling);
  }

  console.log("even numbers ", even);
  /* Section 3 */
  // 8. Get all tech companies without a class name
  // Your code here
  const noClass = document.querySelectorAll("#three a:not([class])");
  console.log("no class tech ", noClass);
  // 9. Get "Amazon" list element
  // Your code here
  const amazon = Array.from(document.querySelectorAll("#three a")).find(
    (el) => el.textContent === "Amazon"
  );
  console.log("Amazon ", amazon);
  // 10. Get all unicorn list elements (not the image element)
  // Your code here
  console.log(
    "unicorn list elements ",
    document.querySelector(".unicorn").parentElement.parentElement.children
  );
};

window.onload = select;
