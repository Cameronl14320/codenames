import { TEAMS } from "./Game";

export default class Player {
    userid: String;
    team: TEAMS;

    constructor(userid: String, team: TEAMS) {
        this.userid = userid;
        this.team = team;
    }
}