import Game from "../../game/Game";
import Board from "../../game/Board";

export function generateBoard(props: { game: Game}) {
    const game = props.game;
    var board : Board = game.board;
    var words : String[][] = board.words;
    var tiles : String[][] = board.tiles;

    // Generate the board according to words
    // Generate the spymaster tiles according to tiles

    return (
        <div>
            This is the board
        </div>
    );
}