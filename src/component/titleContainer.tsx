export default function TitleContainer() {
  return (
    <div className="flex flex-row py-4 px-1 rounded-md items-left justify-center focus:bg-gray-100 hover:text-gray-500">
      <div className="text-lg font-bold flex flex-row">
        <div>1</div>
        <div>.</div>
      </div>
      <div className="text-lg font-medium pl-2">
        JSON Placeholder가 제공하는 포스트들과 포스트들의 댓글 목록을 조회할 수
        있는 어플리케이션을 만들어주세요.
      </div>
    </div>
  );
}
