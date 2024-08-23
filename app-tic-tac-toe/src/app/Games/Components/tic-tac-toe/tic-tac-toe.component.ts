import { Component, Input } from '@angular/core';
import { GameService } from '../../Services/tic-tac-toe/GameService';
import { GameMode } from '../../../Types/GameMode';
import { LocalGameService } from '../../Services/tic-tac-toe/local-game.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tic-tac-toe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tic-tac-toe.component.html',
  styleUrl: './tic-tac-toe.component.scss',
})
export class TicTacToeComponent {
  @Input() gameMode!: GameMode;

  private gameService!: GameService;

  isGameStarted: boolean = false;
  playWindow: string[] = [];

  constructor(private localGameService: LocalGameService) {}

  ngOnInit(): void {
    switch (this.gameMode) {
      case GameMode.Local:
        this.gameService = this.localGameService;
    }

    this.startGame();
  }

  startGame() {
    this.isGameStarted = true;
    this.playWindow = this.gameService.startGame(this.playWindow);
  }
}
