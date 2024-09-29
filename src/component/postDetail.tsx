import { useEffect, useState } from 'react';

import CommentContainer from './commentContainer';
import ContentContainer from './contentContainer';

interface Content {
  id: number;
  title: string;
  body: string;
}

interface Comment {
  id: number;
  postId: number;
  email: string;
  body: string;
}

interface PostDetailProps {
  postId: number | null;
}

export default function PostDetail({ postId }: PostDetailProps) {
  const [content, setContent] = useState<Content | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    if (postId === null) {
      return;
    }

    const fetchPostAndComments = async () => {
      try {
        const [postResponse, commentsResponse] = await Promise.all([
          fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`),
          fetch(
            `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
          ),
        ]);

        const contentData: Content = (await postResponse.json()) as Content;
        const commentsData: Comment[] =
          (await commentsResponse.json()) as Comment[];

        setContent(contentData);
        setComments(commentsData);
      } catch (error) {
        console.error('api response error', error);
      }
    };

    void fetchPostAndComments();
  }, [postId]);

  return (
    <div className="h-full overflow-y-auto no-scrollbar py-5 px-6">
      {content !== null && (
        <div className="w-full h-auto pb-2 border-dashed border-b-2 border-red-300">
          <div className="text-2xl font-bold text-red-400 pb-2 ">내용</div>
          <ContentContainer body={content.body} />
        </div>
      )}

      <div className="text-2xl font-bold text-red-400 pt-4 pb-2">댓글</div>
      {comments.map((comment) => (
        <CommentContainer
          key={comment.id}
          email={comment.email}
          body={comment.body}
        />
      ))}
    </div>
  );
}
