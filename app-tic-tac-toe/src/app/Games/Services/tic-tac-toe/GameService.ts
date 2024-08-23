export abstract class GameService {
  protected playWindow: string[] = [];
  protected playerOne: string | undefined;
  protected playerTwo: string | undefined;
  protected currentPlayer: string | undefined;

  abstract makeMove(index: number): void;
  abstract checkWinner(): string | null;

  startGame(): string[] {
    this.playWindow = new Array(9).fill('');
    this.setFirstPlayer();

    return this.playWindow;
  }

  setFirstPlayer() {
    this.currentPlayer = this.playerOne;
  }

  setNextPlayer() {
    this.currentPlayer =
      this.currentPlayer === this.playerOne ? this.playerTwo : this.playerOne;
  }
}
