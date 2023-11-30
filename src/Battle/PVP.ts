import Battle from './Battle';
import Fighter from '../Fighter/Fighter';

class PVP extends Battle {
  private _enemy: Fighter;
    
  constructor(player: Fighter, enemy: Fighter) {
    super(player);
    this._enemy = enemy;
  }

  fight(): number {
    while (this.player.lifePoints !== -1 && this._enemy.lifePoints !== -1) {
      this.player.attack(this._enemy);
      if (this._enemy.lifePoints !== -1) {
        this._enemy.attack(this.player);
      }
    }
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}

export default PVP;