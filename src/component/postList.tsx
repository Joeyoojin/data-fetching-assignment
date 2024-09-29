import TitleContainer from './titleContainer';

export default function PostList() {
  return (
    <div className="flex flex-col h-full py-5 px-8 items-left justify-start border-red-300">
      <div className="text-3xl font-bold text-red-400 pb-4">포스트 목록</div>
      <div className="overflow-y-scroll no-scrollbar h-full">
        <TitleContainer />
        <TitleContainer />
        <TitleContainer />
        <TitleContainer />
        <TitleContainer />
        <TitleContainer />
        <TitleContainer />
        <TitleContainer />
        <TitleContainer />
        <TitleContainer />
        <TitleContainer />
        <TitleContainer />
      </div>
    </div>
  );
}
