import { ObjectBase, ObjectBaseConfigInterface } from './ObjectBase';
import { Scenario } from './Scenario';

export class GetReady extends ObjectBase<ObjectBaseConfigInterface> {

  constructor() {
    super({
      spriteX: 134,
      spriteY: 0,
      width: 174,
      height: 152,
      positionX: (window.screen.width / 2) - (174 / 2),
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
