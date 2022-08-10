import Race from './Race';

export default class Orc extends Race {
  _maxLifePoints: number;
  static instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc.addInstance();
    this._maxLifePoints = 74;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static addInstance(): void {
    Orc.instances += 1;
  }

  static createdRacesInstances(): number {
    return Orc.instances;
  }
} 