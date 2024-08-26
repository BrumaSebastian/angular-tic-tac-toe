import { Injectable } from '@angular/core';
import { GameService } from './GameService';
import { TileValue } from './TileValue';
import { GameResult, GameStatus } from '../../../Types/GameMode';

@Injectable({
  providedIn: 'root',
})
export class LocalGameService extends GameService {
  override makeMove(index: number): void {
    if (this.playWindow[index] !== TileValue.Empty) {
      return;
    }

    if (this.outcome.gameStatus === GameStatus.Started) {
      this.playWindow[index] = this.currentPlayer.symbol;
      this.proccesWinningCondition();
      this.setNextPlayer();
    }

    if (this.outcome.gameStatus === GameStatus.Finished) {
      switch (this.outcome.gameResult) {
        case GameResult.Won:
          console.log(`${this.currentPlayer}`);
          break;
      }
    }
  }

  override proccesWinningCondition(): void {
    for (let index = 0; index < this.winningPositions.length; index++) {
      if (
        this.playWindow[this.winningPositions[index][0]] !== TileValue.Empty &&
        this.playWindow[this.winningPositions[index][0]] ===
          this.playWindow[this.winningPositions[index][1]] &&
        this.playWindow[this.winningPositions[index][1]] ===
          this.playWindow[this.winningPositions[index][2]]
      ) {
        this.outcome.gameStatus = GameStatus.Finished;
        this.outcome.gameResult = GameResult.Won;
        this.outcome.winningPlayer = this.currentPlayer;
        this.outcome.winningCombination = this.winningPositions[index];
      }
    }

    if (this.playWindow.every((ps) => ps !== TileValue.Empty)) {
      this.outcome.gameStatus = GameStatus.Finished;
      this.outcome.gameResult = GameResult.Draw;
    }
  }
}
