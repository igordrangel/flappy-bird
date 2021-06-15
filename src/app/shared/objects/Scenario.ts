import { Ground } from './Ground';
import { FlappyBird } from './FlappyBird';
import { Pipe } from './Pipe';
import { Screens } from '../screens/Screens';
import { Background } from './Background';
import { GetReady } from './GetReady';
import { Score } from './Score';
import { GameOver } from './GameOver';


export class Scenario {
  public static audioHit = new Audio('./assets/efeitos/hit.wav');
  public static ground: Ground;
  public static flappyBird: FlappyBird;
  public static pipe: Pipe;
  public static background: Background;
  public static getReady: GetReady;
  public static score: Score;
  public static gameOver: GameOver;

  public static createGround() {
    this.ground = new Ground();
  }

  public static createFlappyBird() {
    this.flappyBird = new FlappyBird();
  }

  public static createPipe() {
    this.pipe = new Pipe();
  }

  public static createBackground() {
    this.background = new Background();
  }

  public static createGetReady() {
    this.getReady = new GetReady();
  }

  public static createScore() {
    this.score = new Score();
  }

  public static createGameOver() {
    this.gameOver = new GameOver();
  }

  public static loop() {
    Screens.currentScreen.draw(Screens.frames);
    Screens.currentScreen.update();

    Screens.frames += 1;
    requestAnimationFrame(Scenario.loop);
  }

  public static getCanvas() {
    return document.querySelector('canvas');
  }

  public static getContext() {
    return this.getCanvas().getContext('2d');
  }

  public static getSprites() {
    const sprites = new Image();
    sprites.src = './assets/sprites.png';

    return sprites;
  }
}
