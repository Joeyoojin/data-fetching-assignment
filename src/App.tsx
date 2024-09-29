import './App.css';

import { useEffect, useState } from 'react';

import PostDetail from './component/postDetail';
import PostList from './component/postList';

interface Post {
  id: number;
  title: string;
  body: string;
}

export const App = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [selectedPostId, setSelectedPostId] = useState<number | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts',
        );
        const data: Post[] = (await response.json()) as Post[];
        setPosts(data);
        if (data.length > 0 && data[0] !== undefined) {
          setSelectedPostId(data[0].id);
        }
      } catch (error) {
        console.error('api response error', error);
      }
    };

    void fetchPosts();
  }, []);

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="h-3/4 w-5/6 border-2 grid grid-cols-2 border-red-400 rounded-lg overflow-hidden">
        <div className="border-dashed border-r-2 border-red-300 h-full py-1 overflow-hidden">
          <PostList
            posts={posts}
            selectedPostId={selectedPostId}
            onSelectPost={setSelectedPostId}
          />
        </div>

        <div className="h-full overflow-hidden">
          <PostDetail postId={selectedPostId} />
        </div>
      </div>
    </div>
  );
};
