import { tileType } from "../types/tileType";
import { getRandomInt } from "./getRandomInt";

export const findRandomEmptySquare = (gameBoard: tileType[]): number => {
    const emptyIndexes = gameBoard.map((square, index) => {
        if (square === "") return index;
        return -1;
    }).filter(index => index != -1);

    return emptyIndexes[getRandomInt(emptyIndexes.length)];
}