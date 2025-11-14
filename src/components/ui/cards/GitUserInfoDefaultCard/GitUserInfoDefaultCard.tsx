import styles from './GitUserInfoDefaultCard.module.scss';
import React from 'react'

interface IProps {
    name: string;
    value: string;
}

export const GitUserInfoDefaultCard = ({ name, value }: IProps) => {
  return (
    <div className={styles.column}>
        <div className={styles.column__name}>{name}</div>
        <div className={styles.column__value}>{value}</div>
    </div>
  )
}
