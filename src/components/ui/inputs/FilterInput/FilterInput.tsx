'use client';

import { Input } from '../Input/Input'
import { useGitQueryParams } from '@/store/git-query-params/useGitQueryParams'
import styles from './FilterInput.module.scss';
import { useQueryFilter } from '@/hooks/useQueryFilter';

export const FilterInput = () => {
  const { onChange } = useQueryFilter(); 
  const login = useGitQueryParams(s => s.login);

  return (
    <Input
     value={login}
     placeholder='User login'
     className={styles.filter__input}
     defaultValue={login} 
     onChange={onChange}
    />
  )
}
