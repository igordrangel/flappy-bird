import { ScreenBase } from './ScreenBase';
import { Screens } from './Screens';
import { Scenario } from '../objects/Scenario';

export class GameOverScreen extends ScreenBase {
  draw(frames: number) {
    Scenario.gameOver.draw();
  }

  init() {
    Scenario.createGameOver();
  }

  update() {
  }

  click() {
    Screens.changeScreen(Screens.start);
  }
}
