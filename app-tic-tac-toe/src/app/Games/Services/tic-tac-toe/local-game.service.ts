import { Injectable } from '@angular/core';
import { GameService } from './GameService';

@Injectable({
  providedIn: 'root',
})
export class LocalGameService implements GameService {
  constructor() {}
  startGame(playWindow: string[]): string[] {
    playWindow = new Array(9).fill('');

    return playWindow;
  }
  makeMove(): void {
    throw new Error('Method not implemented.');
  }
  checkWinner(): string | null {
    throw new Error('Method not implemented.');
  }
}
