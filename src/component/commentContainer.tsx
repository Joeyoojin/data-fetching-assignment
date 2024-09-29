interface CommentContainerProps {
  email: string;
  body: string;
}

export default function CommentContainer({
  email,
  body,
}: CommentContainerProps) {
  return (
    <div className="flex flex-col py-2 px-1 rounded-md items-left justify-center">
      <div className="font-semibold text-base pb-1 text-neutral-800">
        작성자: {email}
      </div>
      <div className="text-sm font-normal">{body}</div>
    </div>
  );
}
