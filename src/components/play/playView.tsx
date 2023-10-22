import { useEffect, useState } from "react";
import { createNextGameboard } from "../../functions/createNextGameboard";
import { viewState } from "../../types/viewState";
import { iconType } from "../../types/iconType";
import { EndView } from "../end/endView";
import { GameboardSquare } from "./gameboardSquare";
import { PlayHeader } from "./playHeader";
import { ResultsTab } from "./resultsTab";
import { getPlayerDisplayName } from "../../functions/getPlayerDisplayName";
import { tileType } from "../../types/tileType";
import { checkGameover } from "../../functions/checkGameover";
import { gameResult } from "../../types/gameResult";
import { findRandomEmptySquare } from "../../functions/findRandomEmptySquare";

interface PlayViewProps {
  setViewState: (viewState: viewState) => void;
  viewState: viewState;
  isCpuGame: boolean;
  player1Icon: iconType;
  setPlayer1Icon: (iconType: iconType) => void;
}

export const PlayView: React.FC<PlayViewProps> = ({
  setViewState,
  viewState,
  isCpuGame,
  player1Icon,
  setPlayer1Icon,
}) => {
  const [currentIcon, setCurrentIcon] = useState<iconType>("X");
  const [gameBoard, setGameBoard] = useState<tileType[]>(new Array(9).fill(""));
  const [gameResult, setGameResult] = useState<gameResult>("tied");
  const [scores, setScores] = useState({ X: 0, O: 0, tied: 0 });

  const handleGameover = (gameResult: gameResult) => {
    setGameResult(gameResult);
    setViewState("end");

    const nextScores = scores;
    nextScores[gameResult] += 1;
    setScores(nextScores);
  };

  const handleMove = (index: number) => {
    const nextGameboard = createNextGameboard(gameBoard, index, currentIcon);
    setGameBoard(nextGameboard);

    const checkGameoverResult = checkGameover(nextGameboard);

    if (checkGameoverResult.isGameOver) {
      handleGameover(checkGameoverResult.result);
      return;
    }

    setCurrentIcon(currentIcon === "O" ? "X" : "O");
  };

  useEffect(() => {
    if (currentIcon != player1Icon && isCpuGame) {
      const nextCpuMove = findRandomEmptySquare(gameBoard);
      handleMove(nextCpuMove);
    }
  }, [currentIcon]);

  const resetGameBoard = () => {
    setGameBoard(new Array(9).fill(""));
  };

  const handleQuit = () => {
    resetGameBoard();
    setPlayer1Icon("O");
    setScores({ X: 0, O: 0, tied: 0 });
    setViewState("start");
  };

  const handleNextRound = () => {
    resetGameBoard();
    setCurrentIcon("X");
    setViewState("play");
  };

  return (
    <div className="h-full relative">
      <div className="flex flex-col justify-center items-center m-auto w-[460px] h-full">
        <PlayHeader reset={handleQuit} playerTurn={currentIcon} />
        <div className="flex w-full flex-col gap-6 h-[460px] mb-7 grid grid-cols-3">
          {gameBoard.map((iconType, index) => (
            <GameboardSquare
              index={index}
              handleMove={handleMove}
              tileType={iconType}
            />
          ))}
        </div>
        <div className="flex w-full justify-between items-center gap-6">
          <ResultsTab
            colorClass="bg-teal-400"
            gamesWon={scores["X"]}
            text={`X (${getPlayerDisplayName(isCpuGame, player1Icon === "X")})`}
          />
          <ResultsTab
            colorClass="bg-slate-300"
            gamesWon={scores["tied"]}
            text="TIES"
          />
          <ResultsTab
            colorClass="bg-amber-400"
            gamesWon={scores["O"]}
            text={`O (${getPlayerDisplayName(isCpuGame, player1Icon === "O")})`}
          />
        </div>
      </div>
      {viewState === "end" && (
        <EndView
          handleQuit={handleQuit}
          player1Icon={player1Icon}
          gameResult={gameResult}
          isCpuGame={isCpuGame}
          handleNextRound={handleNextRound}
        />
      )}
    </div>
  );
};
