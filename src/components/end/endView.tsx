import { iconType } from "../../types/iconType";
import { EndViewContent } from "./endViewContent";
import { gameResult } from "../../types/gameResult";

interface EndViewProps {
  handleQuit: () => void;
  handleNextRound: () => void;
  player1Icon: iconType;
  gameResult: gameResult;
  isCpuGame: boolean;
}

export const EndView: React.FC<EndViewProps> = ({
  player1Icon,
  gameResult,
  handleQuit,
  isCpuGame,
  handleNextRound,
}) => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-neutral-950 bg-opacity-70 w-full h-full flex justify-center items-center">
      <div className="h-[266px] bg-cyan-950 w-full flex flex-col justify-center items-center">
        <EndViewContent
          isCpuGame={isCpuGame}
          player1Icon={player1Icon}
          gameResult={gameResult}
        />
        <div className="flex gap-4">
          <button
            className="bg-slate-400 font-bold tracking-wider drop-shadow-lg px-5 py-3 rounded-lg"
            onClick={(e) => {
              e.preventDefault();
              handleQuit();
            }}
          >
            QUIT
          </button>
          <button
            className="bg-amber-400 font-bold tracking-wider drop-shadow-lg px-5 py-3 rounded-lg"
            onClick={(e) => {
              e.preventDefault();
              handleNextRound();
            }}
          >
            NEXT ROUND
          </button>
        </div>
      </div>
    </div>
  );
};
