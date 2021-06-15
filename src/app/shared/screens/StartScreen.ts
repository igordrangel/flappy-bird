import { ScreenBase } from './ScreenBase';
import { Scenario } from '../objects/Scenario';
import { Screens } from './Screens';

export class StartScreen extends ScreenBase {
  draw() {
    Scenario.background.draw();
    Scenario.flappyBird.draw();
    Scenario.ground.draw();
    Scenario.getReady.draw();
  }

  init() {
    Scenario.createBackground();
    Scenario.createFlappyBird();
    Scenario.createGround();
    Scenario.createPipe();
    Scenario.createGetReady();
  }

  update() {
    Scenario.ground.update();
  }

  click() {
    Screens.changeScreen(Screens.play);
  }
}
