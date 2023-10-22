import { checkGameOverResult } from "../types/gameResult";
import { tileType } from "../types/tileType";

const checkWinCondition = (tile1: tileType, tile2: tileType, tile3: tileType): tileType => {
    if (tile1 === "X" && tile2 === "X" && tile3 === "X") return "X";
    if (tile1 === "O" && tile2 === "O" && tile3 === "O") return "O";

    return "";
}

export const checkGameover = (gameBoard: tileType[]): checkGameOverResult => {

    const topRowWinner = checkWinCondition(gameBoard[0], gameBoard[1], gameBoard[2]);
    if (topRowWinner != "") return { isGameOver: true, result: topRowWinner };

    const middleRowWinner = checkWinCondition(gameBoard[3], gameBoard[4], gameBoard[5]);
    if (middleRowWinner != "") return { isGameOver: true, result: middleRowWinner };

    const bottomRowWinner = checkWinCondition(gameBoard[6], gameBoard[7], gameBoard[8]);
    if (bottomRowWinner != "") return { isGameOver: true, result: bottomRowWinner };

    const leftColWinner = checkWinCondition(gameBoard[0], gameBoard[3], gameBoard[6]);
    if (leftColWinner != "") return { isGameOver: true, result: leftColWinner };

    const middleColWinner = checkWinCondition(gameBoard[1], gameBoard[4], gameBoard[7]);
    if (middleColWinner != "") return { isGameOver: true, result: middleColWinner };

    const rightColWinner = checkWinCondition(gameBoard[2], gameBoard[5], gameBoard[8]);
    if (rightColWinner != "") return { isGameOver: true, result: rightColWinner };

    const diagonal1Winner = checkWinCondition(gameBoard[0], gameBoard[4], gameBoard[8]);
    if (diagonal1Winner != "") return { isGameOver: true, result: diagonal1Winner };

    const diagonal2Winner = checkWinCondition(gameBoard[2], gameBoard[4], gameBoard[6]);
    if (diagonal2Winner != "") return { isGameOver: true, result: diagonal2Winner };

    return gameBoard.filter(tile => tile === "").length === 0
        ? { isGameOver: true, result: "tied" } 
        : { isGameOver: false };
}