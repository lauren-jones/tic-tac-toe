import { iconType } from "../types/iconType";
import { tileType } from "../types/tileType";

export const createNextGameboard = (gameboard: tileType[], index: number, currentIcon: iconType): tileType[] => {
    const nextGameboard = gameboard.map((square, i) => {
      if (i === index) {
        return currentIcon;
      } else {
        return square;
      }
    });

    return nextGameboard;
}