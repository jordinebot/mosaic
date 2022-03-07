import React from 'react';
import { TileLayers } from '../../models';
import styles from './tile.module.css';

interface TileProps {
  layers: TileLayers;
  onClick: any;
}

function Tile({ layers, onClick }: TileProps) {
  return (
    <button className={styles.tile} onClick={onClick}>
      {layers.join(' ')}
    </button>
  );
}

export default Tile;
