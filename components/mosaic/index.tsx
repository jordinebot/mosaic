import React from 'react';
import { CSSProperties } from 'react';
import { MosaicSize, Tiles } from '../../models';
import { createTiles } from '../../utils';
import Tile from '../tile';

import styles from './mosaic.module.css';

interface MosaicProps {
  size: MosaicSize;
}

interface CSSCustomProperties extends CSSProperties {
  '--rows': number;
  '--cols': number;
}

function Mosaic({ size }: MosaicProps) {
  const [rows, cols] = size;
  const style: CSSCustomProperties = { '--rows': rows, '--cols': cols };

  const [tiles, setTiles] = React.useState<Tiles>([]);
  const [current, setCurrent] = React.useState<number | undefined>(undefined);

  React.useEffect(() => {
    setTiles(createTiles(size));
  }, [size]);

  function handleTileClick(next: number) {
    if (current !== undefined && next !== current) {
      const currentTile = tiles[current];
      const nextTile = tiles[next];

      const common = currentTile.filter((layer) =>
        nextTile.find((l) => l === layer)
      );
      const updatedCurrentTile = currentTile.filter(
        (layer) => !common.includes(layer)
      );
      const updatedNextTile = nextTile.filter(
        (layer) => !common.includes(layer)
      );

      const updatedTiles = [...tiles];
      updatedTiles[current] = updatedCurrentTile;
      updatedTiles[next] = updatedNextTile;
      setTiles(updatedTiles);
    }
    setCurrent(next);
  }

  return (
    <div className={styles.mosaic} style={style}>
      {tiles.map((tile, index) => (
        <Tile
          key={index}
          layers={tile}
          onClick={() => handleTileClick(index)}
        />
      ))}
    </div>
  );
}

export default Mosaic;
