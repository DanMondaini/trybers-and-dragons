export default interface SimplesFighter {
  lifePoints: number;
  strength: number;

  attack(enemy: SimplesFighter): void;
  receiveDamage(attackPoints: number): number;
}