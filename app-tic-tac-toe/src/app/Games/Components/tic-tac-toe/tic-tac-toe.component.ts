import { Component, Input } from '@angular/core';
import { GameService } from '../../Services/tic-tac-toe/GameService';
import { GameMode } from '../../../Types/GameMode';
import { LocalGameService } from '../../Services/tic-tac-toe/local-game.service';
import { CommonModule } from '@angular/common';
import { Player } from '../../Services/tic-tac-toe/Player';
import { TileValue } from '../../Services/tic-tac-toe/TileValue';

@Component({
  selector: 'app-tic-tac-toe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tic-tac-toe.component.html',
  styleUrl: './tic-tac-toe.component.scss',
})
export class TicTacToeComponent {
  @Input() gameMode!: GameMode;

  private _gameService!: GameService;

  isGameStarted: boolean = false;
  playWindow: TileValue[] = [];
  players: string[] = [];
  currentPlayingPlayer!: Player;

  constructor(private localGameService: LocalGameService) {}

  ngOnInit(): void {
    switch (this.gameMode) {
      case GameMode.Local:
        this._gameService = this.localGameService;
        this.players = ['Player-1', 'Player-2'];
    }

    this.startGame();
  }

  startGame() {
    this.isGameStarted = true;
    this.playWindow = this._gameService.startGame(this.players);
    this.currentPlayingPlayer = this._gameService.getCurrentPlayer();
  }

  setTile(tileIndex: number) {
    this._gameService.makeMove(tileIndex);
  }
}
