export const getPlayerDisplayName = (isCpuGame: boolean, isPlayer1Icon: boolean) => {
    if (!isCpuGame) {
        if (!isPlayer1Icon) return "P2";
        return "P1"
    }

    if (!isPlayer1Icon) return "CPU";
    return "YOU"
}