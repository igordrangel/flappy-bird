import { StartScreen } from './StartScreen';
import { PlayScreen } from './PlayScreen';
import { GameOverScreen } from './GameOverScreen';
import { ScreenBase } from './ScreenBase';

export class Screens {
  static frames = 0;
  static currentScreen?: ScreenBase;
  static start = new StartScreen();
  static play = new PlayScreen();
  static gameOver = new GameOverScreen();

  public static changeScreen(newScreen: ScreenBase) {
    this.currentScreen = newScreen;
    newScreen.init();
  }
}
