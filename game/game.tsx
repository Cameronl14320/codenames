import { generateWords, generateTiles } from "./generate";
import { useState } from "react";

enum GAME_STATES {
    INIT,
    LOBBY,
    SETUP,
    PLAY,
    END
}


export enum TEAMS {
    RED,
    BLUE
}

export default class Game {
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
        }
        this.changeState(GAME_STATES.PLAY);
    }
}

