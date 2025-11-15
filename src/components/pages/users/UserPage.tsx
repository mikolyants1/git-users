import { IGitUser } from "@/types/entities.types";
import styles from './UserPage.module.scss';
import { GitUserInfoSection } from "@/components/sections/GitUserInfoSection/GitUserInfoSection";
import Link from "next/link";

interface IProps {
    user: IGitUser;
}

export const UserPage = ({ user }: IProps) => {
  return (
    <div className={styles.container}>
      <section className={styles.link__container}>
        <Link className={styles.link} href={'/'}>
          Forward home
        </Link>
      </section>
      <GitUserInfoSection user={user} />
    </div>
  )
}
