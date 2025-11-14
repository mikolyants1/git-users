'use client';

import { GitUsers as useGitUsers } from '@/hooks/query/git-users/useGitUsers';
import styles from './GitUsersSection.module.scss';
import GitUserCard from '@/components/ui/cards/GitUserCard/GitUserCard';
import { Loader } from '@/components/ui/Loader/Loader';
import { ErrorCard } from '@/components/ui/cards/ErrorCard/ErrorCard';
import { useGitQueryParams } from '@/store/git-query-params/useGitQueryParams';
import { EmptyCard } from '@/components/ui/cards/EmptyCard/EmptyCard';

export const GitUsersSection = () => {
  const { users, isLoading, isError, error } = useGitUsers();
  const login = useGitQueryParams(s => s.login);

  if (!login) return <EmptyCard />;

  if (isLoading) return <Loader />;

  if (isError) return <ErrorCard message={error ? error.message : 'Unexpected error'} />

  return (
    <section className={styles.cards}>
       {users.map(u => (
          <GitUserCard key={u.id} user={u} />
        ))}
    </section>
  )
}
