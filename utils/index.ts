import { MosaicSize, TileLayers, Tiles } from '../models';

export function createTile(): TileLayers {
  const options = 'ABCDEFGH';
  const layers: string[] = [];
  while (layers.length < 3) {
    const index = Math.floor(Math.random() * options.length);
    if (!layers.includes(options[index])) layers.push(options[index]);
  }
  return layers.sort();
}

export function createTiles([rows, cols]: MosaicSize): Tiles {
  const tiles = [];
  for (let i = 0; i < rows * cols; i++) {
    tiles.push(createTile());
  }
  return tiles;
}
