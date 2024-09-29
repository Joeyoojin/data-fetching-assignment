interface TitleContainerProps {
  id: number;
  title: string;
  isSelected: boolean;
  onClick: () => void;
}

export default function TitleContainer({
  id,
  title,
  isSelected,
  onClick,
}: TitleContainerProps) {
  return (
    <div
      className={`flex flex-row py-4 px-1 rounded-md items-left justify-start cursor-pointer ${
        isSelected ? 'bg-gray-100 ' : 'hover:text-gray-500'
      }`}
      onClick={onClick}
    >
      <div className="text-lg font-bold flex flex-row mx-2">
        <div>{id}</div>
        <div>.</div>
      </div>
      <div className="text-lg font-medium pl-2 truncate">{title}</div>
    </div>
  );
}
