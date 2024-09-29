import TitleContainer from './titleContainer';

interface Post {
  id: number;
  title: string;
}

interface PostListProps {
  posts: Post[];
  selectedPostId: number | null;
  onSelectPost: (id: number) => void;
}

export default function PostList({
  posts,
  selectedPostId,
  onSelectPost,
}: PostListProps) {
  return (
    <div className="flex flex-col h-full py-5 px-8 items-left justify-start border-red-300">
      <div className="text-3xl font-bold text-red-400 pb-4">포스트 목록</div>
      <div className="overflow-y-scroll no-scrollbar h-full">
        {posts.map((post) => (
          <TitleContainer
            key={post.id}
            id={post.id}
            title={post.title}
            isSelected={post.id === selectedPostId}
            onClick={() => {
              onSelectPost(post.id);
            }}
          />
        ))}
      </div>
    </div>
  );
}
