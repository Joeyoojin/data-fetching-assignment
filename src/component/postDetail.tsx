import CommentContainer from './commentContainer';
import ContentContainer from './contentContainer';

export default function PostDetail() {
  return (
    <div className="w-full h-full flex flex-col items-left justify-center">
      <div className="w-full h-1/2 py-5 px-6 border-dashed border-b-2 border-red-300">
        <div className="text-2xl font-bold text-red-400 pb-3 ">내용</div>
        <div className="text-sm">
          <ContentContainer />
        </div>
      </div>
      <div className="w-full h-1/2 pt-5 px-6 justify-center">
        <div className="text-2xl font-bold text-red-400 pb-1">댓글</div>
        <div className="overflow-y-scroll no-scrollbar h-4/5">
          <CommentContainer />
          <CommentContainer />
          <CommentContainer />
          <CommentContainer />
          <CommentContainer />
          <CommentContainer />
        </div>
      </div>
    </div>
  );
}
