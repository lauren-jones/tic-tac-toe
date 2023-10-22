import { iconType } from "../../types/iconType";
import { Icon } from "../shared/icon";

interface PlayHeaderProps {
  reset: () => void;
  playerTurn: iconType;
}

export const PlayHeader: React.FC<PlayHeaderProps> = ({
  reset,
  playerTurn,
}) => {
  return (
    <div className="flex w-full justify-between items-center mb-7">
      <div className="flex gap-2">
        <Icon colorClass="fill-teal-400" size="30" iconType="X" />
        <Icon colorClass="fill-amber-400" size="30" iconType="O" />
      </div>
      <div className="flex items-center bg-cyan-900 py-4 px-7 rounded-xl drop-shadow-lg mr-4">
        <Icon colorClass="fill-slate-300" size="25" iconType={playerTurn} />
        <p className="text-slate-300 font-bold tracking-wider ml-2">TURN</p>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          reset();
        }}
        className="flex items-center bg-slate-300 text-cyan-950 p-4 rounded-xl drop-shadow-lg"
      >
        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M19.524 0h-1.88a.476.476 0 0 0-.476.499l.159 3.284A9.81 9.81 0 0 0 9.835.317C4.415.317-.004 4.743 0 10.167.004 15.597 4.406 20 9.835 20a9.796 9.796 0 0 0 6.59-2.536.476.476 0 0 0 .019-.692l-1.348-1.349a.476.476 0 0 0-.65-.022 6.976 6.976 0 0 1-9.85-.63 6.987 6.987 0 0 1 .63-9.857 6.976 6.976 0 0 1 10.403 1.348l-4.027-.193a.476.476 0 0 0-.498.476v1.881c0 .263.213.476.476.476h7.944A.476.476 0 0 0 20 8.426V.476A.476.476 0 0 0 19.524 0Z"
            fill="#1F3641"
          />
        </svg>
      </button>
    </div>
  );
};
