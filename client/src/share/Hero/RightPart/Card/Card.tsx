import React from 'react';
import styles from './card.css';


interface ICardProps   {
  firstLine?: string,
  number?: string,
  addMeaningToNumber?: string,
  lastLine?: string,
}

export function Card({ firstLine, number, addMeaningToNumber, lastLine }: ICardProps) {
  return (
    <li className={ styles.card }>
      <p className={ styles.littleText }>{ firstLine }</p>
      <p className={ styles.bigText }>
        { number }
        <span className={ styles.littleText }>
          {addMeaningToNumber}
        </span>
      </p>
      <p className={ styles.littleText }>{ lastLine }</p>
    </li>
  );
}
