import { GameResult, GameStatus } from './GameMode';

export abstract class Outcome {
  public gameStatus: GameStatus;
  public gameResult: GameResult;

  constructor() {
    this.gameStatus = GameStatus.Idle;
    this.gameResult = GameResult.None;
  }
}
