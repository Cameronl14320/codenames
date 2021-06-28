import { generateWords, generateTiles } from "./generate";

export class Game {
    words: String[][] = [];
    tiles: Number[][] = [];

    generateWords() {
        this.words = generateWords();
    }

    generateTiles() {
        this.tiles = generateTiles();
    }

}
