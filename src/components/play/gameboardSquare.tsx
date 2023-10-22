import { tileType } from "../../types/tileType";
import { Icon } from "../shared/icon";

interface GameboardSquareProps {
  index: number;
  handleMove: (index: number) => void;
  tileType: tileType;
}

export const GameboardSquare: React.FC<GameboardSquareProps> = ({
  index,
  handleMove,
  tileType,
}) => {
  return (
    <button
      className="h-[140px] w-[140px] bg-cyan-900 drop-shadow-lg rounded-xl flex justify-center items-center"
      key={index}
      disabled={tileType === "" ? false : true}
      onClick={(e) => {
        e.preventDefault();
        handleMove(index);
      }}
    >
      {tileType != "" && (
        <Icon
          colorClass={tileType === "X" ? "fill-teal-400" : "fill-amber-400"}
          size="70"
          iconType={tileType}
        />
      )}
    </button>
  );
};
