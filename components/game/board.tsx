import Game from "../../game/Game";
import Board from "../../game/Board";
import { Button } from "@material-ui/core"

export default function GenerateBoard(props: { game: Game}) {
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

function displayWords(props: { words: String[][]}) {
    const words = props.words;

    var display_words = [];
    for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 5; col++) {
            display_words.push(
                <Button>
                    {words[row][col]}
                </Button>
            )
        }
    }
}

function displayTiles(props: { tiles: String[][]}) {
    const tiles = props.tiles;

    var display_tiles = [];
    for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 5; col++) {
            display_tiles.push(
                <Button>
                    {tiles[row][col]}
                </Button>
            )
        }
    }
}