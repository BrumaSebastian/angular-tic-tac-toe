import { Component, Input } from '@angular/core';
import { GameMode } from '../../Types/GameMode';
import { CommonModule } from '@angular/common';
import { TicTacToeComponent } from "../../Games/Components/tic-tac-toe/tic-tac-toe.component";

@Component({
  selector: 'app-game-window',
  standalone: true,
  imports: [CommonModule, TicTacToeComponent],
  templateUrl: './game-window.component.html',
  styleUrl: './game-window.component.scss',
})
export class GameWindowComponent {
  @Input() gameType!: GameMode;

  GameMode = GameMode;
}
