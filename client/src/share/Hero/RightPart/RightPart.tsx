import React from 'react';
import styles from './rightpart.css';
import { Card } from './Card';
import { useContent } from '../../../hooks/useContent';

const data = [
  {
    firstLine: 'мы',
    number: '1',
    addMeaningToNumber: '',
    lastLine: 'на рынке',
  },
  {
    firstLine: 'гарантируем',
    number: '50%',
    addMeaningToNumber: '',
    lastLine: 'безопасности',
  },
  {
    firstLine: 'календарик за',
    number: '2001',
    addMeaningToNumber: 'г.',
    lastLine: 'в подарок',
  },
  {
    firstLine: 'путешествие',
    number: '597',
    addMeaningToNumber: '',
    lastLine: 'дней',
  }
]

export function RightPart() {
  const contentData = useContent();

  return (
    <ul className={ styles.rightPart }>
      {contentData.map((item) => (
        <Card
          key={`${item.firstLine}-${item.number}-${item.lastLine}`}
          firstLine={item.firstLine}
          number={item.number}
          addMeaningToNumber={item.addMeaningToNumber}
          lastLine={item.lastLine}
        />
      ))}
    </ul>
  );
}
