import { Component, Input } from '@angular/core';
import { GameMode } from '../../Types/GameMode';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game-window',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-window.component.html',
  styleUrl: './game-window.component.scss',
})
export class GameWindowComponent {
  @Input() gameType!: GameMode;

  GameMode = GameMode;
}
