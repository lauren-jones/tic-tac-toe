import { useState } from "react";
import { iconType } from "./types/iconType";
import { StartView } from "./components/start/startView";
import { PlayView } from "./components/play/playView";
import { viewState } from "./types/viewState";

function App() {
  const [viewState, setViewState] = useState<viewState>("start");
  const [player1Icon, setPlayer1Icon] = useState<iconType>("O");
  const [isCpuGame, setIsCpuGame] = useState(false);

  const handleStartNewGame = (isCpuGame: boolean) => {
    setIsCpuGame(isCpuGame);
    setViewState("play");
  };

  return (
    <div className="bg-cyan-950 h-screen w-screen">
      {viewState === "start" && (
        <StartView
          handleStartNewGame={handleStartNewGame}
          player1Icon={player1Icon}
          setPlayer1Icon={setPlayer1Icon}
        />
      )}
      {(viewState === "play" || viewState === "end") && (
        <PlayView
          setViewState={setViewState}
          viewState={viewState}
          isCpuGame={isCpuGame}
          player1Icon={player1Icon}
          setPlayer1Icon={setPlayer1Icon}
        />
      )}
    </div>
  );
}

export default App;
