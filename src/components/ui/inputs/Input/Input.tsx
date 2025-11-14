import type { HTMLAttributes } from 'react';
import clsx from 'clsx';
import styles from './Input.module.scss';

interface IProps extends HTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  value: string;
  isError?: boolean;
}

export const Input = ({ value, className, placeholder, isError = false, onChange }: IProps) => {
  return (
    <input
      className={clsx(styles.input, className, {
        [styles.error]: isError,
        [styles.success]: !isError,
      })}
      defaultValue={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
