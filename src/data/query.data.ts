import { IGitUsersQueryArgs } from '@/api/git-users/git-users.types';
import { QUERY_KEYS } from '@/constants/query.constant';
import { QueryUtils } from '@/utils/query.utils';

export const queryKeys = {
  users: (args: IGitUsersQueryArgs) => QueryUtils.mergeOptions(QUERY_KEYS.GIT_USERS, args),
};
