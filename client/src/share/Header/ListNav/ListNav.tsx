import React from 'react';
import styles from './listnav.css';
import { ListItem } from './ListItem';
import { useMenu } from '../../../hooks/useMenu';


export function ListNav() {
  const menuData = useMenu();

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {menuData.map((item) => (
          <ListItem
            key={`${item.menu}-${item.route}`}
            menu={item.menu}
            route={item.route}
          />
        ))}
      </ul>
    </nav>
  );
}
