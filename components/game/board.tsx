import Game from "../../pages/api/game/Game";
import Board from "../../pages/api/game/Board";
import { Box, Grid, Button } from "@material-ui/core"

export default function GenerateBoard(props: { board: Board }) {
    var board : Board = props.board
    var words : String[][] = board.words;
    var tiles : String[][] = board.tiles;

    // console.log("Board: " + words)

    // Generate the board according to words
    // Generate the spymaster tiles according to tiles

    var display_words = displayWords({words});
    var display_tiles = displayTiles({tiles});

    console.log("display words: " + words)

    return (
        <Box>
            <Grid
                container
                direction="column"
            >
                <Box suppressHydrationWarning>
                    {display_words}
                </Box>
                <Box>
                    {display_tiles}
                </Box>
            </Grid>

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