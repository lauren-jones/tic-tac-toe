interface NewGameButtonProps {
  colorClass: string;
  hoverClass: string;
  text: string;
  handleClick: () => void;
}

export const NewGameButton: React.FC<NewGameButtonProps> = ({
  colorClass,
  text,
  handleClick,
  hoverClass,
}) => {
  return (
    <button
      className={`${colorClass} w-full rounded-xl p-5 drop-shadow text-xl font-bold mb-5 ${hoverClass}`}
      onClick={(e) => {
        e.preventDefault();
        handleClick();
      }}
    >
      {text}
    </button>
  );
};
