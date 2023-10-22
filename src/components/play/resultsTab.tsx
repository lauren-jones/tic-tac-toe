interface ResultsTabProps {
  gamesWon: number;
  colorClass: string;
  text: string;
}

export const ResultsTab: React.FC<ResultsTabProps> = ({
  gamesWon,
  colorClass,
  text,
}) => {
  return (
    <div
      className={`w-[140px] flex flex-col justify-center grow items-center ${colorClass} rounded-xl py-3`}
    >
      <p className="text-sm">{text}</p>
      <p className="font-bold text-2xl">{gamesWon}</p>
    </div>
  );
};
