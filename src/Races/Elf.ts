import Race from './Race';

export default class Elf extends Race {
  _maxLifePoints: number;
  static instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf.addInstance();
    this._maxLifePoints = 99;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static addInstance(): void {
    Elf.instances += 1;
  }

  static createdRacesInstances(): number {
    return Elf.instances;
  }
} 