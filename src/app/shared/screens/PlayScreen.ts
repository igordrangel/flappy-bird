import { ScreenBase } from './ScreenBase';
import { Scenario } from '../objects/Scenario';

export class PlayScreen extends ScreenBase {
  draw(frames: number) {
    Scenario.background.draw();
    Scenario.pipe.draw();
    Scenario.ground.draw();
    Scenario.flappyBird.draw();
    Scenario.score.draw();
  }

  init() {
    Scenario.createScore();
  }

  update() {
    Scenario.pipe.update();
    Scenario.ground.update();
    Scenario.flappyBird.update();
    Scenario.score.update();
  }

  click() {
    Scenario.flappyBird.jump();
  }
}
