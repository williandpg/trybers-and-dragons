import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private static _createdArchetypeInstances = 0;
  private _damage: EnergyType = 'mana';

  constructor(name: string) {
    super(name);
    Necromancer._createdArchetypeInstances += 1;
  }
    
  get energyType(): EnergyType {
    return this._damage;
  }

  public static createdArchetypeInstances(): number {
    return this._createdArchetypeInstances;
  }
}

export default Necromancer;