import styles from './ErrorCard.module.scss';

interface IProps {
  message: string;
}

export const ErrorCard = ({ message }: IProps) => {
  return (
    <div className={styles.container}>
      {message}
      <div className={styles.points} />
    </div>
  );
};
