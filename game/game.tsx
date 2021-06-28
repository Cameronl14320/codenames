import { generateWords, generateTiles } from "./generate";
import { useState } from "react";

const GAME_STATES: String[] = [
    "INIT",
    "LOBBY",
    "SETUP",
    "PLAY",
    "END"
]

export class Game {
    gameState:String = "INIT";
    words: String[][] = [];
    tiles: Number[][] = [];
    players: String[] = [];

    generateWords() {
        this.words = generateWords();
    }

    generateTiles() {
        this.tiles = generateTiles();
    }

    newPlayer(userid: String) {
        this.players.push(userid);
    }

    changeState(newState: String) {
        if (GAME_STATES.includes(newState)) {
            this.gameState = newState;
        }
    }

}
