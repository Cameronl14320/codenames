import { generateWords, generateTiles } from "./generate";
import { useState } from "react";

enum GAME_STATES {
    INIT,
    LOBBY,
    SETUP,
    PLAY,
    END
}

enum TILES {
    RED,
    BLUE,
    CIVILIAN,
    ASSASSIN
}

enum TEAMS {
    RED,
    BLUE
}

type guess = {
    row: number;
    col: number;
}

type player = {
    userid: string;
    team: TILES
}

export class Game {
    gameState: GAME_STATES;
    currentTurn: TEAMS;
    words: String[][];
    tiles: String[][];
    players: String[];

    constructor() {
        this.players = [];
        this.tiles = [];
        this.words = [];
        this.currentTurn = TEAMS.RED;
        this.gameState = GAME_STATES.INIT;
    }

    generateWords() {
        this.words = generateWords();
    }

    generateTiles() {
        this.tiles = convertTiles(generateTiles());
    }

    newPlayer(userid: String) {
        this.players.push(userid);
    }

    changeState(newState: GAME_STATES) {
        this.gameState = newState;
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
        this.changeState(GAME_STATES.PLAY);
    }

    makeRelation(relation: String, related: number) {

    }

    makeGuess(player: player, guess: guess) {
        if (this.tiles[guess.row][guess.col] == "ASSASSIN") {
            // Game lost for player
        }
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
