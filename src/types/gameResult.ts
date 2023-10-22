export type gameResult = "tied" | "X" | "O"

export type checkGameOverResult =  { isGameOver: false } | { isGameOver: true, result: gameResult }