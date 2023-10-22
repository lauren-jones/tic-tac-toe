import { iconType } from "../../types/iconType";
import { Icon } from "../shared/icon";

interface SelectIconButtonProps {
  isActive: boolean;
  iconType: iconType;
  handleSelectIcon: (iconType: iconType) => void;
}

export const SelectIconButton: React.FC<SelectIconButtonProps> = ({
  isActive,
  iconType,
  handleSelectIcon,
}) => {
  return (
    <button
      onClick={() => handleSelectIcon(iconType)}
      className={
        "w-1/2 p-3 flex justify-center items-center rounded-xl " +
        (isActive && "bg-slate-300")
      }
    >
      <Icon
        colorClass={isActive ? "fill-cyan-950" : "fill-slate-300"}
        size="30"
        iconType={iconType}
      />
    </button>
  );
};
