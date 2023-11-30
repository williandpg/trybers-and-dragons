import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private static _createdArchetypeInstances = 0;
  private _damage: EnergyType = 'stamina';

  constructor(name: string) {
    super(name);
    Warrior._createdArchetypeInstances += 1;
  }
    
  get energyType(): EnergyType {
    return this._damage;
  }

  public static createdArchetypeInstances(): number {
    return this._createdArchetypeInstances;
  }
}

export default Warrior;