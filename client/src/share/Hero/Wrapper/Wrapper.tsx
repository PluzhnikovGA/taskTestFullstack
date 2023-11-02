import React from 'react';
import styles from './wrapper.css';
import styleGeneral from './../../../general.css';
import line from './../../../assets/img/line.png';


interface IWrapperProps {
  id: string,
}

export function Wrapper({ id }: IWrapperProps) {
  return (
    <div id={id} className={ styles.wrapper }>
      <button className={ styles.button }>
        Начать&nbsp;путешествие
        <svg className={ styleGeneral.topRight } width="7" height="7" viewBox="0 0 7 7" xmlns="http://www.w3.org/2000/svg">
          <polyline points="0,0 7,0 7,7" fill="none" stroke="#fff" strokeWidth="2" />
        </svg>
        <svg className={ styleGeneral.bottomLeft } width="7" height="7" viewBox="0 0 7 7" xmlns="http://www.w3.org/2000/svg">
          <polyline points="0,0 0,7 7,7" fill="none" stroke="#fff" strokeWidth="2" />
        </svg>
      </button>
      <picture className={ styles.line }>
        <img src={ line } alt="line" />
      </picture>
    </div>
  );
}
