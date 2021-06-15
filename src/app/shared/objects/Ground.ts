import { ObjectBase, ObjectBaseConfigInterface } from './ObjectBase';
import { Scenario } from './Scenario';

export class Ground extends ObjectBase<ObjectBaseConfigInterface> {

  constructor() {
    super({
      spriteX: 0,
      spriteY: 610,
      width: 224,
      height: 112,
      positionX: 0,
      positionY: window.screen.height - 112
    });
  }

  draw() {
    Scenario.getContext().drawImage(
      Scenario.getSprites(),
      this.config.spriteX, this.config.spriteY,
      this.config.width, this.config.height,
      this.config.positionX, this.config.positionY,
      this.config.width, this.config.height,
    );

    Scenario.getContext().drawImage(
      Scenario.getSprites(),
      this.config.spriteX, this.config.spriteY,
      this.config.width, this.config.height,
      (this.config.positionX + this.config.width), this.config.positionY,
      this.config.width, this.config.height,
    );

    Scenario.getContext().drawImage(
      Scenario.getSprites(),
      this.config.spriteX, this.config.spriteY,
      this.config.width, this.config.height,
      (this.config.positionX + (this.config.width * 2)), this.config.positionY,
      this.config.width, this.config.height,
    );
  }

  update() {
    const movementPosition = 1;
    const repeat = this.config.width / 2;
    const movement = this.config.positionX - movementPosition;

    this.config.positionX = movement % repeat;
  }
}
