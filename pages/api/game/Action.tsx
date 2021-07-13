import Player from './Player'
import Board from './Board'

type guess = {
    row: number;
    col: number;
}

export class Action {
    makeRelation(player: Player, relation: String, related: number) {

    }

    makeGuess(board: Board, player: Player, guess: guess) {

    }
}