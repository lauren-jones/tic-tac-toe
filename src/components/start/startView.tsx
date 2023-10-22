import { iconType } from "../../types/iconType";
import { Icon } from "../shared/icon";
import { NewGameButton } from "./newGameButton";
import { SelectIconButton } from "./selectIconButton";

interface StartViewProps {
  handleStartNewGame: (isCpuGame: boolean) => void;
  player1Icon: iconType;
  setPlayer1Icon: (iconType: iconType) => void;
}

export const StartView: React.FC<StartViewProps> = ({
  handleStartNewGame,
  player1Icon,
  setPlayer1Icon,
}) => {
  const startCpuGame = () => {
    handleStartNewGame(true);
  };

  const startPlayerGame = () => {
    handleStartNewGame(false);
  };

  return (
    <div className="flex flex-col w-[460px] justify-center items-center h-full m-auto">
      <div className="flex gap-2 mb-9">
        <Icon colorClass="fill-teal-400" size="30" iconType="X" />
        <Icon colorClass="fill-amber-400" size="30" iconType="O" />
      </div>
      <div className="bg-cyan-900 p-5 w-full rounded-xl flex flex-col justify-center items-center drop-shadow-xl mb-9">
        <p className="text-slate-300 font-bold tracking-wider mb-5">
          PICK PLAYER 1'S MARK
        </p>
        <div className="flex bg-cyan-950 w-full rounded-xl p-2 justify-center items-center mb-4">
          <SelectIconButton
            isActive={player1Icon === "X"}
            iconType="X"
            handleSelectIcon={setPlayer1Icon}
          />
          <SelectIconButton
            isActive={player1Icon === "O"}
            iconType="O"
            handleSelectIcon={setPlayer1Icon}
          />
        </div>
        <p className="text-slate-400 text-sm tracking-wider">
          REMEMBER: X GOES FIRST
        </p>
      </div>
      <NewGameButton
        text="NEW GAME (VS CPU)"
        colorClass="bg-amber-400"
        hoverClass="hover:bg-amber-300"
        handleClick={startCpuGame}
      />
      <NewGameButton
        text="NEW GAME (VS PLAYER)"
        colorClass="bg-teal-400"
        hoverClass="hover:bg-teal-300"
        handleClick={startPlayerGame}
      />
    </div>
  );
};
