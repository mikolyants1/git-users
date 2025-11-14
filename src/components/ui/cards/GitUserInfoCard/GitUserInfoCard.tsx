'use client';

import { IGitUser } from '@/types/entities.types'
import styles from './GitUserInfoCard.module.scss';
import { LogoCard } from '../LogoCard/LogoCard';
import { useMemo } from 'react';
import { GitUserInfoUtils } from '@/utils/info.utils';
import { EGitUserInfoRender } from '@/enums/git-user-info.enum';

interface IProps {
    user: IGitUser;
}

export const GitUserInfoCard = ({ user }: IProps) => {
  const userInfo = useMemo(() => GitUserInfoUtils.buildData(user, {
    login: EGitUserInfoRender.DEFAULT,
    html_url: EGitUserInfoRender.DEFAULT,
    score: EGitUserInfoRender.DEFAULT,
    type: EGitUserInfoRender.DEFAULT,
    user_view_type: EGitUserInfoRender.DEFAULT,
    organizations_url: EGitUserInfoRender.DEFAULT,
  }), [user]);

  return (
    <section className={styles.container}>
      <LogoCard url={user.avatar_url} width={140} height={140} />
      <div className={styles.table}>
        {userInfo.map(Elem => Elem)}
      </div>
    </section>
  )
}
