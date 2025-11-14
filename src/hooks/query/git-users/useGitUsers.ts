import { GitUsersApi } from '@/api/git-users/git-users.api';
import { queryKeys } from '@/data/query.data';
import { useGitQueryParams } from '@/store/git-query-params/useGitQueryParams';
import { useQuery } from '@tanstack/react-query';

export const GitUsers = () => {
  const login = useGitQueryParams(s => s.login);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: queryKeys.users({ login }),
    queryFn: () => GitUsersApi.getGitUsers({ login }),
    enabled: !!login
  });

  return {
    isLoading,
    isError,
    error,
    users: data ? data.items : [],
  };
};
