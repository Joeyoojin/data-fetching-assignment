interface ContentContainerProps {
  body: string;
}

export default function ContentContainer({ body }: ContentContainerProps) {
  return (
    <div className="flex flex-col py-2 px-1 rounded-md items-left justify-center">
      <div className="text-base font-normal">{body}</div>
    </div>
  );
}
