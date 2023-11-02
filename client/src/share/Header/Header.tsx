import React from 'react';
import styles from './header.css';
import stylesGeneral from './../../general.css';
import { Logo } from './Logo';
import { ListNav } from './ListNav';

export function Header() {
  return (
    <header className={ styles.header } >
      <div className={`${styles.container} ${stylesGeneral.container}`}>
        <Logo />
        <ListNav />
      </div>
    </header>
  );
}
