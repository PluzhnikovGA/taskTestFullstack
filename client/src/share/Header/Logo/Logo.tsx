import React from 'react';
import styles from './logo.css';
import stylesGeneral from './../../../general.css';
import logo from "./../../../assets/img/logo.png";

export function Logo() {
  return (
    <div className={ styles.logo }>
      <img src={logo} alt="logo" />
      <svg className={ stylesGeneral.topLeft } width="7" height="7" viewBox="0 0 7 7" xmlns="http://www.w3.org/2000/svg">
        <polyline points="0,7 0,0 7,0" fill="none" stroke="#fff" strokeWidth="2" />
      </svg>
      <svg className={ stylesGeneral.bottomLeft } width="7" height="7" viewBox="0 0 7 7" xmlns="http://www.w3.org/2000/svg">
        <polyline points="0,0 0,7 7,7" fill="none" stroke="#fff" strokeWidth="2" />
      </svg>
      <svg className={ stylesGeneral.bottomRight } width="7" height="7" viewBox="0 0 7 7" xmlns="http://www.w3.org/2000/svg">
        <polyline points="7,0 7,7 0,7" fill="none" stroke="#fff" strokeWidth="2" />
      </svg>
      <svg className={ stylesGeneral.topRight } width="7" height="7" viewBox="0 0 7 7" xmlns="http://www.w3.org/2000/svg">
        <polyline points="0,0 7,0 7,7" fill="none" stroke="#fff" strokeWidth="2" />
      </svg>
    </div>
  );
}
