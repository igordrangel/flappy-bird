export abstract class ScreenBase {
  public abstract init();

  public abstract draw(frames: number);

  public abstract update();

  public abstract click();
}
