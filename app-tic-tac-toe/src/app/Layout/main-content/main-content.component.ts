import { Component, Input } from '@angular/core';
import { MainContentHeaderComponent } from '../main-content-header/main-content-header.component';
import { MainContentFooterComponent } from '../main-content-footer/main-content-footer.component';
import { GameWindowComponent } from '../game-window/game-window.component';
import { GameMode } from '../../Types/GameMode';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    MainContentHeaderComponent,
    MainContentFooterComponent,
    GameWindowComponent,
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {
  @Input() gameMode!: GameMode;
}
