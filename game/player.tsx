import { TEAMS } from "./Game";

enum PLAYER_STATES {
    START,
    NOT_READY,
    READY,
    PLAY,
    END,
}

export default class Player {
    userid: String;
    team: TEAMS;
    state: PLAYER_STATES;

    constructor(userid: String, team: TEAMS) {
        this.userid = userid;
        this.team = team;
        this.state = PLAYER_STATES.NOT_READY;
    }

    readyUp() {
        if (this.state == PLAYER_STATES.NOT_READY) {
            this.state = PLAYER_STATES.READY;
        } else if (this.state == PLAYER_STATES.READY) {
            this.state = PLAYER_STATES.NOT_READY;
        }
    }

    startState() {
        this.state = PLAYER_STATES.START;
    }

    playState() {
        this.state = PLAYER_STATES.PLAY;
    }

    endState() {
        this.state = PLAYER_STATES.END;
    }
}