import { IGitUser } from "@/types/entities.types";
import styles from './UserPage.module.scss';
import { GitUserInfoCard } from "@/components/ui/cards/GitUserInfoCard/GitUserInfoCard";
import Link from "next/link";

interface IProps {
    user: IGitUser;
}

export const UserPage = ({ user }: IProps) => {
  return (
    <main className={styles.container}>
      <section className={styles.link__container}>
        <Link className={styles.link} href={'/'}>
          Forward home
        </Link>
      </section>
      <GitUserInfoCard user={user} />
    </main>
  )
}
