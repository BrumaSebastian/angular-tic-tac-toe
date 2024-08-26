import { TileValue } from './TileValue';

export class Player {
  name: string;
  symbol: TileValue;

  constructor(name: string, symbol: TileValue) {
    this.name = name;
    this.symbol = symbol;
  }
}
