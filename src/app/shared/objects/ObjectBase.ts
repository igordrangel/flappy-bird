export interface ObjectBaseSpriteInterface {
  spriteX?: number;
  spriteY?: number;
}

export interface ObjectBaseConfigInterface extends ObjectBaseSpriteInterface {
  positionX?: number;
  positionY?: number;
  width?: number;
  height?: number;
}

export abstract class ObjectBase<ObjectType extends ObjectBaseConfigInterface> {
  protected constructor(public config: ObjectType) {
  }

  protected doCollision(objectA: ObjectBase<any>, objectB: ObjectBase<any>) {
    const objectAPositionY = objectA.config.positionY + objectA.config.positionX;
    const objectBPositionY = objectB.config.positionY;

    return objectAPositionY >= objectBPositionY;
  }

  public abstract draw();

  public abstract update();
}
