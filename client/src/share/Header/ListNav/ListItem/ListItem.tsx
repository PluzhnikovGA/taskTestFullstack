import React from 'react';
import styles from './listitem.css';

export interface IListItemProps {
  menu?: string,
  route?: string,
}

export function ListItem({ menu, route } : IListItemProps) {

  return (
    <li className={styles.item}>
      <a href={route} className={styles.link}>{ menu }</a>
    </li>
  );
}
