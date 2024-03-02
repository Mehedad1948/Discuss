import { Button } from '@nextui-org/react';
import { auth } from '@/auth';
import Profile from './components/profile';
import TopicCreateForm from './components/topics/topic-create-form';

export default async function Home() {
  const session = await auth();

  return (
    <div className='grid grid-cols-4 gap-4 p-4'>
      <div className='col-span-4 flex items-center justify-between'>
        <h1 className='text-xl m-2'>Top Post</h1>
        <div>
          <TopicCreateForm />
        </div>
      </div>
    </div>
  );
}
