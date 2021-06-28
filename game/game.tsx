import { generateWords, generateTiles, convertTiles } from "./generate";
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
    tiles: String[][] = [];
    players: String[] = [];

    generateWords() {
        this.words = generateWords();
    }

    generateTiles() {
        this.tiles = convertTiles(generateTiles());
    }

    newPlayer(userid: String) {
        this.players.push(userid);
    }

    changeState(newState: String) {
        if (GAME_STATES.includes(newState)) {
            this.gameState = newState;
        }
    }

    startPlay() {
        for (let player = 0; player < this.players.length; player++) {
            // Check if player is ready
            if (this.words.length < 1) {
                // not ready
            }
            if (this.tiles.length < 1) {
                // not ready
            }
        }
        this.changeState("PLAY");
    }

}
