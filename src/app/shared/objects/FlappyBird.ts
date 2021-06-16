import { ObjectBase, ObjectBaseConfigInterface, ObjectBaseSpriteInterface } from './ObjectBase';
import { Scenario } from './Scenario';
import { Screens } from '../screens/Screens';

interface FlappyBirdConfigInterface extends ObjectBaseConfigInterface{
  currentFrame: number;
  speed: number;
  gravid: number;
  jump: number;
  movements: ObjectBaseSpriteInterface[];
}

export class FlappyBird extends ObjectBase<FlappyBirdConfigInterface> {
  constructor() {
    super({
      spriteX: 0,
      spriteY: 0,
      width: 33,
      height: 24,
      positionX: 10,
      positionY: window.screen.height / 3,
      currentFrame: 0,
      jump: 3.6,
      gravid: 0.15,
      speed: 0,
      movements: [
        {spriteX: 0, spriteY: 0,},
        {spriteX: 0, spriteY: 26,},
        {spriteX: 0, spriteY: 52,},
        {spriteX: 0, spriteY: 26,},
      ]
    });
  }

  public jump() {
    Scenario.audioJump.play().then();
    this.config.speed =  - this.config.jump;
  }

  public draw() {
    this.updateCurrentFrame(Screens.frames);
    const {spriteX, spriteY} = this.config.movements[this.config.currentFrame];

    Scenario.getContext().drawImage(
      Scenario.getSprites(),
      spriteX, spriteY,
      this.config.width, this.config.height,
      this.config.positionX, this.config.positionY,
      this.config.width, this.config.height,
    );
  }

  public update() {
    if (this.doCollision(this, Scenario.ground)) {
      Scenario.audioHit.play().then();
      Screens.changeScreen(Screens.gameOver);
      return;
    }

    const positionYBefore = this.config.positionY;
    this.config.speed += this.config.gravid;
    this.config.positionY += this.config.speed;
    const positionYAfter = this.config.positionY;

    if (positionYAfter > positionYBefore + 5) {
      Scenario.audioFell.play().then();
    }
  }

  protected updateCurrentFrame(frames: number) {
    const intervalOfFrames = 10;
    const pastInterval = frames % intervalOfFrames === 0;

    if (pastInterval) {
      const incrementBase = 1;
      const increment = incrementBase + this.config.currentFrame;
      const baseRepetition = this.config.movements.length;
      this.config.currentFrame = increment % baseRepetition;
    }
  }
}
