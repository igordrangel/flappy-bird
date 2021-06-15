import { ObjectBase, ObjectBaseConfigInterface } from './ObjectBase';
import { Scenario } from './Scenario';
import { Screens } from '../screens/Screens';

interface ScoreConfigInterface extends ObjectBaseConfigInterface {
  score: number;
}

export class Score extends ObjectBase<ScoreConfigInterface> {

  constructor() {
    super({
      score: 0
    });
  }

  draw() {
    Scenario.getContext().font = '35px "VT323"';
    Scenario.getContext().textAlign = 'right';
    Scenario.getContext().fillStyle = 'white';
    Scenario.getContext().fillText(`${this.config.score}`, window.screen.width - 10, 35);
  }

  update() {
    const intervalFrames = 20;
    const pastInterval = Screens.frames % intervalFrames === 0;

    if(pastInterval) {
      this.config.score += 1;
    }
  }
}
