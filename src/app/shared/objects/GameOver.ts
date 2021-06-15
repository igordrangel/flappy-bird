import { ObjectBase, ObjectBaseConfigInterface } from './ObjectBase';
import { Scenario } from './Scenario';

export class GameOver extends ObjectBase<ObjectBaseConfigInterface> {

  constructor() {
    super({
      spriteX: 134,
      spriteY: 153,
      width: 226,
      height: 200,
      positionX: (window.screen.width / 2) - 226 / 2,
      positionY: window.screen.height / 3
    });
  }

  draw() {
    Scenario.getContext().drawImage(
      Scenario.getSprites(),
      this.config.spriteX, this.config.spriteY,
      this.config.width, this.config.height,
      this.config.positionX, this.config.positionY,
      this.config.width, this.config.height
    );
  }

  update() {
  }
}
