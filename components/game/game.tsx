import Game from "../../game/Game";
import { generateBoard } from "./board";

export default function GameDisplay() {
    const game: Game = new Game();

    var boardDisplay = generateBoard({ game });
    
    return (
        <div>
            { boardDisplay }
        </div>
    )
}