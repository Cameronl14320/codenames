import { generateWords, generateTiles } from "./generate";
import { useState } from "react";

enum GAME_STATES {
    INIT,
    LOBBY,
    SETUP,
    PLAY,
    END
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
    team: TEAMS;
}

export class Game {
    gameState: GAME_STATES;
    currentTurn: TEAMS;
    players: String[];

    constructor() {
        this.players = [];
        this.currentTurn = TEAMS.RED;
        this.gameState = GAME_STATES.INIT;
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

    makeGuess(player: player, guess: guess): EXECUTION {
        if (player.team != this.currentTurn) {
            return EXECUTION.FAILED;
        }
        if (this.tiles[guess.row][guess.col] == "ASSASSIN") {
            // Game lost for player
        }
        return EXECUTION.SUCCESSFUL;
    }
}

