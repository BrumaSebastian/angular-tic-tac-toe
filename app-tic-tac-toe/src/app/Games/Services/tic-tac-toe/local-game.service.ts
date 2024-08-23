import { Injectable } from '@angular/core';
import { GameService } from './GameService';
import { TileValue } from './TileValue';

@Injectable({
  providedIn: 'root',
})
export class LocalGameService extends GameService {
  constructor() {
    super();
    this.playerOne = TileValue.X;
    this.playerTwo = TileValue.O;
  }

  override makeMove(index: number): void {
    if (this.playWindow[index] !== '') return;

    this.playWindow[index] = this.currentPlayer!;

    if (!this.checkWinner()) {
      this.setNextPlayer();
    }
  }
  override checkWinner(): string | null {
    console.log('safds');

    return null;
  }
}
