import { getIndex } from "./utilities.js";
import { mrPotatoHeadQuotes as MrQuotes } from "./quotes/mrPotatoHead.js";
import mrsPotatoHeadQuotes from "./quotes/mrsPotatoHead.js";
// import * as utils from "./utilities.js";
// console.log("utils name ", utils.name);

export class Game {
  start() {
    document.getElementById("hello").addEventListener("click", () => {
      const index = getIndex();
      const messageContainer = document.getElementById("message");
      if (index === 1) {
        messageContainer.innerText = MrQuotes["hello"];
      } else {
        messageContainer.innerText = mrsPotatoHeadQuotes["hello"];
      }
    });

    document.getElementById("bye").addEventListener("click", () => {
      const index = getIndex();
      const messageContainer = document.getElementById("message");
      if (index === 1) {
        messageContainer.innerText = MrQuotes["bye"];
      } else {
        messageContainer.innerText = mrsPotatoHeadQuotes["bye"];
      }
    });

    document.getElementById("swap").addEventListener("click", () => {
      const index = getIndex();
      const image = document.getElementById("image");
      const messageContainer = document.getElementById("message");
      const wrapper = document.getElementById("wrapper");
      if (index === 1) {
        image.src = "./assets/images/potatohead2.png";
        wrapper.dataset.index = "2";
      } else {
        image.src = "./assets/images/potatohead1.png";
        wrapper.dataset.index = "1";
      }
      messageContainer.innerText = "";
    });
  }
}

export const hello = () => console.log("hello");
