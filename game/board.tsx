import { generateWords, generateTiles } from "./generate";
import { useState } from "react";

enum TILES {
    RED,
    BLUE,
    CIVILIAN,
    ASSASSIN
}


export class Board {
    words: String[][];
    tiles: String[][];

    constructor() {
        this.words = generateWords();
        this.tiles = this.generateTiles();
    }
    
    generateTiles() {
        return convertTiles(generateTiles());
    }
}

function convertTiles(tiles: number[][]) {
    var converted: String[][] = [ [], [], [], [], [] ];
    for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 5; col++) {
            converted[row][col] = TILES[(tiles[row][col])];
        }
    }
    return converted;
}
