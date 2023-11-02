import React from 'react';
import styles from './leftpart.css';

interface ILeftPartProps {
  children: React.ReactNode,
}


export function LeftPart({ children }: ILeftPartProps) {
  return (
    <div className={ styles.leftPart }>
      <h1 className={ styles.title }>
        ПУТЕШЕСТВИЕ
        <p className={ styles.littleTitle }>на красную планету</p>
      </h1>
      { children }
    </div>
  );
}
