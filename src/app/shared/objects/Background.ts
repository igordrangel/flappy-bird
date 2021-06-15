import { ObjectBase, ObjectBaseConfigInterface } from './ObjectBase';
import { Scenario } from './Scenario';

export class Background extends ObjectBase<ObjectBaseConfigInterface> {

  constructor() {
    super({
      spriteX: 390,
      spriteY: 0,
      width: 275,
      height: 204,
      positionX: 0,
      positionY: window.screen.height - 204
    });
  }

  draw() {
    Scenario.getContext().fillStyle = '#70c5ce';
    Scenario.getContext().fillRect(0,0, Scenario.getCanvas().width, Scenario.getCanvas().height);

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
  }

  update() {
  }
}
