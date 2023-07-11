export default () => {
  const bodyChildElements = document.body.children; // HTMLCollection [div]
  console.log("body child elements ", bodyChildElements);

  // const div = bodyChildElements[0];
  const div = Array.from(document.body.children)[0];
  console.log("div from array ", div);

  const divChildElements = div.children; // HTMLCollection [span]
  const divChildren = Array.from(div.children);

  // for (let i = 0; i < divChildren.length; i++) {
  //   const span = document.createElement("span");
  //   span.innerText = "some span element";
  //   div.appendChild(span);

  //   if (i === 10000) break;
  // }

  const helloWorld = div.innerText; // Hello World! Yes!    <-- NOT Hello World!
  const span = divChildElements[0]; // <span>Yes!</span>
  console.log("div innerText ", helloWorld);
  console.log("span ", span);
  // debugger
};
