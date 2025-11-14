import Image from 'next/image'
import styles from './LogoCard.module.scss';

interface IProps {
    url: string;
    width: number | `${number}`;
    height: number | `${number}`;
}

export const LogoCard = ({ url, ...props }: IProps) => {
  return (
    <div className={styles.logo}>
       <Image className={styles.logo__image} {...props} src={url} alt="" />
    </div>
  )
}
