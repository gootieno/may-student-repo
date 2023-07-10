import {Game} from "./game.js";
import { hello } from "./game.js";


window.onload = () => {
  const game = new Game();
  game.start();
  hello()
};
