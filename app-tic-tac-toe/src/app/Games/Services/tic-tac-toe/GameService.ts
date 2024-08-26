import { GameStatus } from '../../../Types/GameMode';
import { GameOutcome } from './GameOutcome';
import { Player } from './Player';
import { TileValue } from './TileValue';

export abstract class GameService {
  protected playWindow: TileValue[] = [];
  protected playerOne!: Player;
  protected playerTwo!: Player;
  protected currentPlayer!: Player;
  protected outcome!: GameOutcome;

  protected winningPositions: number[][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  abstract makeMove(index: number): void;
  abstract proccesWinningCondition(): void;

  constructor() {
    this.outcome = new GameOutcome();
  }

  startGame(players: string[]): TileValue[] {
    this.playWindow = new Array(9).fill(TileValue.Empty);
    this.outcome.gameStatus = GameStatus.Started;
    this.setPlayers(players);
    this.setFirstPlayer();

    return this.playWindow;
  }

  setPlayers(players: string[]): void {
    this.playerOne = new Player(players[0], TileValue.X);
    this.playerTwo = new Player(players[1], TileValue.O);
  }

  setFirstPlayer() {
    this.currentPlayer = this.playerOne;
  }

  setNextPlayer() {
    this.currentPlayer =
      this.currentPlayer === this.playerOne ? this.playerTwo : this.playerOne;
  }

  setGameResult() {}

  getCurrentPlayer(): Player {
    return this.currentPlayer!;
  }
}
