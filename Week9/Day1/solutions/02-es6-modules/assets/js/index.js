import { Game } from "./game.js";
import { hello } from "./game.js";

const initializeGame = () => {
  const game = new Game();
  game.start();
  hello();
};

window.onload = initializeGame;
