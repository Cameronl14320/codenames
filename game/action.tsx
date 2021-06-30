import Player from './player'
import Board from './board'

type guess = {
    row: number;
    col: number;
}

export class Action {
    makeRelation(player: Player, relation: String, related: number) {

    }

    makeGuess(board: Board, player: Player, guess: guess): Board {
        if (board.tiles[guess.row][guess.col] == "ASSASSIN") {
            // Game lost for player
        }
        return new Board();
    }
}