import Game from "../../game/Game";
import Board from "../../game/Board";

export default function generateBoard(props: { game: Game}) {
    const game = props.game;
    var board : Board = game.board;
    var words : String[][] = board.words;
    var tiles : String[][] = board.tiles;

    // Generate the board according to words
    // Generate the spymaster tiles according to tiles

    var display_words = [];
    var display_tiles = [];

    return (
        <div>
            This is the board
        </div>
    );
}

function displayTiles(props: { words: String[][]}) {
    const words = props.words;
}

function displayWords(props: { tiles: String[][]}) {
    const tiles = props.tiles;
}