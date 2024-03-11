import PostCreateForm from '@/components/posts/post-create-form';

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
      </div>

      <div>
        <PostCreateForm slug={slug} />
      </div>
    </div>
  );
}
