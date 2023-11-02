import React from 'react';
import styles from './hero.css';
import stylesGeneral from './../../general.css';
import { LeftPart } from './LeftPart';
import { Wrapper } from './Wrapper';
import { RightPart } from './RightPart';


export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`${styles.container} ${stylesGeneral.container}`}>
        <LeftPart>
          <Wrapper id='leftWrapper'/>
        </LeftPart>
        <RightPart />
        <Wrapper id='containerWrapper'/>
      </div>
    </section>
  );
}
