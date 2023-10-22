import { iconType } from "../../types/iconType";
import { Icon } from "../shared/icon";
import { gameResult } from "../../types/gameResult";

interface EndViewContentProps {
  isCpuGame: boolean;
  gameResult: gameResult;
  player1Icon: iconType;
}

export const EndViewContent: React.FC<EndViewContentProps> = ({
  isCpuGame,
  gameResult,
  player1Icon,
}) => {
  if (gameResult === "tied") {
    return (
      <div className="flex items-center mb-4">
        <p className="text-4xl md:text-5xl ml-5 font-bold tracking-wide text-amber-400">
          ROUND TIED
        </p>
      </div>
    );
  }
  return (
    <>
      {isCpuGame ? (
        <p className="text-slate-400 tracking-wider font-bold text-lg mb-4">
          {gameResult === player1Icon ? "YOU WON!" : "OH NO, YOU LOST..."}
        </p>
      ) : (
        <p className="text-slate-400 tracking-wider font-bold text-lg mb-4">
          {gameResult === player1Icon ? "PLAYER 1 WINS!" : "PLAYER 2 WINS!"}
        </p>
      )}

      <div className="flex items-center mb-4">
        <Icon colorClass="fill-amber-400" size="50" iconType={gameResult} />
        <p className="text-4xl md:text-5xl ml-5 font-bold tracking-wide text-amber-400">
          TAKES THE ROUND
        </p>
      </div>
    </>
  );
};
