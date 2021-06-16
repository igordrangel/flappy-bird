import { ObjectBase, ObjectBaseConfigInterface, ObjectBaseSpriteInterface } from './ObjectBase';
import { Scenario } from './Scenario';
import { Screens } from '../screens/Screens';

interface PipeParInterface {
  positionX: number;
  positionY: number;
  skyPipe?: {
    positionX: number;
    positionY: number;
  };
  groundPipe?: {
    positionX: number;
    positionY: number;
  };
}

interface PipeConfigInterface extends ObjectBaseConfigInterface{
  ground: ObjectBaseSpriteInterface;
  sky: ObjectBaseSpriteInterface;
  space: number;
  pars: PipeParInterface[];
}

export class Pipe extends ObjectBase<PipeConfigInterface> {

  constructor() {
    super({
      width: 52,
      height: 400,
      ground: {
        spriteX: 0,
        spriteY: 169
      },
      sky: {
        spriteX: 52,
        spriteY: 169
      },
      space: 80,
      pars: []
    });
  }

  draw() {
    this.config.pars.forEach(par => {
      const yRandom = par.positionY;
      const spaceBetweenPipes = 90;

      // [Sky Pipe]
      const pipeSkyX = par.positionX;
      const pipeSkyY = yRandom;
      Scenario.getContext().drawImage(
        Scenario.getSprites(),
        this.config.sky.spriteX, this.config.sky.spriteY,
        this.config.width, this.config.height,
        pipeSkyX, pipeSkyY,
        this.config.width, this.config.height,
      );

      // [Ground Pipe]
      const pipeGroundX = par.positionX;
      const pipeGroundY = this.config.height + spaceBetweenPipes + yRandom;
      Scenario.getContext().drawImage(
        Scenario.getSprites(),
        this.config.ground.spriteX, this.config.ground.spriteY,
        this.config.width, this.config.height,
        pipeGroundX, pipeGroundY,
        this.config.width, this.config.height,
      );

      par.skyPipe = {
        positionX: pipeSkyX,
        positionY: this.config.height + pipeSkyY
      };
      par.groundPipe = {
        positionX: pipeGroundX,
        positionY: pipeGroundY
      };
    });
  }

  update() {
    const past100frames = Screens.frames % 100 === 0;
    if(past100frames) {
      this.config.pars.push({
        positionX: window.screen.width,
        positionY: -150 * (Math.random() + 1),
      });
    }

    this.config.pars.forEach(par => {
      par.positionX -= 2;

      if(this.hasColitionWithFlappyBird(par)) {
        Scenario.audioHit.play().then();
        Screens.changeScreen(Screens.gameOver);
      }

      if(par.positionX + this.config.width <= 0) {
        this.config.pars.shift();
      }
    });
  }

  private hasColitionWithFlappyBird(par: PipeParInterface) {
    const headFlappyBird = Scenario.flappyBird.config.positionY;
    const footFlappyBird = Scenario.flappyBird.config.positionY + (Scenario.flappyBird.config.height - 8);

    if((Scenario.flappyBird.config.positionX + (Scenario.flappyBird.config.width - 8)) >= par.positionX) {
      if(headFlappyBird <= par.skyPipe.positionY) {
        return true;
      }

      if(footFlappyBird >= par.groundPipe.positionY) {
        return true;
      }
    }
    return false;
  }
}
