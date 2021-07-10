import Game from "../../game/Game";
import GenerateBoard from "./board";

export default function GameDisplay() {
    const game: Game = new Game();

    var boardDisplay = GenerateBoard({ game });
    
    return (
        <div>
            { boardDisplay }
        </div>
    )
}