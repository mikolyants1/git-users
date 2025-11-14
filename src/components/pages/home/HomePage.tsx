import styles from './HomePage.module.scss';
import { FilterInput } from "@/components/ui/inputs/FilterInput/FilterInput";
import { GitUsersSection } from "@/components/sections/GitUsersSection/GitUsersSection";

export const HomePage = () => {
  return (
    <main className={styles.container}>
      <section className={styles.container__filter}>
        <FilterInput />
      </section>
      <GitUsersSection />
    </main>
  )
}
