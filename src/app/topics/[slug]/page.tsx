import PostCreateForm from '@/components/posts/post-create-form';
import PostList from '@/components/posts/post-list';
import { fetchPostsByTopicSlug } from '@/db/queries/posts';

interface TopiceShowPageProps {
  params: {
    slug: string;
  };
}

export default function TopiceShowPage({ params }: TopiceShowPageProps) {
  const { slug } = params;

  return (
    <div>
      <div className='col-span-3'>
        <h1 className='text-2xl font-bold mb-2'>{slug}</h1>
        <PostList fetchData={() => fetchPostsByTopicSlug(slug)} />
      </div>

      <div>
        <PostCreateForm slug={slug} />
      </div>
    </div>
  );
}
