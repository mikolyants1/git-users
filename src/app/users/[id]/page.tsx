import { GitUsersApi } from '@/api/git-users/git-users.api';
import { UserPage } from '@/components/pages/users/UserPage';

interface IProps {
  params: Promise<{ id: string }>;
}

export const revalidate = 60000;

export default async function Page({ params }: IProps) {
  const id = (await params).id;
  const user = await GitUsersApi.getGitUser(id);
  
  return (
    <main className='wrapper'>
      <div className='page'>
        <UserPage user={user} />
      </div>
    </main>
  );
};
