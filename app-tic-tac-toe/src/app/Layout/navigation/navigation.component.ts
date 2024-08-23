import { Component, EventEmitter, Output } from '@angular/core';
import { GameMode } from '../../Types/GameMode';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  @Output() gameModeSelected = new EventEmitter<GameMode>();

  GameMode = GameMode;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.gameModeSelected.emit(GameMode.None);
  }

  onGameModeSelect(gameMode: GameMode) {
    this.gameModeSelected.emit(gameMode);
  }
}
