import Game from "../../game/Game";
import Board from "../../game/Board";
import { Box, Button } from "@material-ui/core"

export default function GenerateBoard(props: { game: Game}) {
    const game = props.game;
    var board : Board = game.board;
    var words : String[][] = board.words;
    var tiles : String[][] = board.tiles;

    console.log("Board: " + words)

    // Generate the board according to words
    // Generate the spymaster tiles according to tiles

    var display_words = displayWords({words});
    var display_tiles = displayTiles({tiles});

    return (
        <Box>
            {display_words}
            {display_tiles}
        </Box>
    );
}

function displayWords(props: { words: String[][]}) {
    const words = props.words;

    var display_words: any[] = [];
    for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 5; col++) {
            display_words.push(
                <Button key={"word-" + row + "-" + col}>
                    {words[row][col]}
                </Button>
            )
        }
    }
    return display_words;
}

function displayTiles(props: { tiles: String[][]}) {
    const tiles = props.tiles;

    var display_tiles: any[] = [];
    for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 5; col++) {
            display_tiles.push(
                <Button key={"tile-" + row + "-" + col}>
                    {tiles[row][col]}
                </Button>
            )
        }
    }
    return display_tiles;
}