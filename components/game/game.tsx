import Game from "../../game/Game";
import GenerateBoard from "./board";
import { Box } from '@material-ui/core'

export default function GameDisplay() {
    const game: Game = new Game();
    console.log("Game: " + game.board.words);

    var boardDisplay = GenerateBoard({ game });
    
    return (
        <Box>
            { boardDisplay }
        </Box>
    )
}