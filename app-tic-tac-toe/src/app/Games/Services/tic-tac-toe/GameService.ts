export interface GameService {
  startGame(playWindow: string[]): string[];
  makeMove(): void;
  checkWinner(): string | null;
}
