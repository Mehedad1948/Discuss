import PostList from '@/components/posts/post-list';
import { db } from '@/db';
import { fetchPostsBySearchTerms } from '@/db/queries/posts';
import { redirect } from 'next/navigation';

interface SearchPageProps {
  searchParams: {
    term: string;
  };
}

const SearchPage = ({ searchParams }: SearchPageProps) => {
  const { term } = searchParams;
  if (!term) {
    redirect('/');
  }

  return (
    <div>
      <PostList fetchData={() => fetchPostsBySearchTerms(term)} />
    </div>
  );
};

export default SearchPage;
