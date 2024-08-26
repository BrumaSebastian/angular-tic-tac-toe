import { Outcome } from '../../../Types/Outcome';
import { Player } from './Player';

export class GameOutcome extends Outcome {
  winningPlayer: Player | null;
  winningCombination: number[] | null;

  constructor() {
    super();
    this.winningPlayer = null;
    this.winningCombination = null;
  }
}
