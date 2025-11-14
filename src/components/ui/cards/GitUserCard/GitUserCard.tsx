import { IGitUser } from "@/types/entities.types";
import styles from './GitUserCard.module.scss';
import { useHover } from "@/hooks/useHover";
import clsx from 'clsx';
import Link from "next/link";
import { LogoCard } from "../LogoCard/LogoCard";

interface IProps {
    user: IGitUser;
}

const GitUserCard = ({ user }: IProps) => {
  const { isHover,  handlers} = useHover();
  return (
    <div 
     className={clsx(styles.container, { [styles.active]: isHover })}
     {...handlers}>
      <LogoCard url={user.avatar_url} width={70} height={70} />
      <div className={styles.login}>
        {user.login}
      </div>
      <Link className={styles.link} href={`/users/${user.id}`}>
        More information
      </Link>
    </div>
  )
}

export default GitUserCard;