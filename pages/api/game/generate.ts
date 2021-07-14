import { words } from '../../../data/words'
import type { NextApiRequest, NextApiResponse } from 'next'

const size = 5;
const teams : number[] = [9, 8];
const num_tiles = 25;

enum TILES {
    RED,
    BLUE,
    CIVILIAN,
    ASSASSIN
}

/*
    Generate 5x5 tile board for spymasters
    0 - red
    1 - blue
    2 - civilian
    3 - assassin
*/
export function generateTiles(): number[] {
    // init board with civilians
    var tiles:number[] = [];

    var iterations = 0;
    while (tiles.length < 25) {
        tiles.push(2)
        iterations++;
        if (iterations > num_tiles) {
            break;
        }
    }
    // assassin
    let assassin_tile = getRandomInt(num_tiles);
    tiles[assassin_tile] = 3; // update -- replace tile with assassin
    // teams
    for (let team = 0; team <= 1; team++) {
        var team_tiles = 0;
        while (team_tiles < teams[team]) {
            let random_tile = getRandomInt(num_tiles);
            let tile = tiles[random_tile];
            if (tile == 2) { // check if civilian 
                tiles[random_tile] = team; // update - replace tile with team
                team_tiles++;
            }
        }
    }
    // console.log(tiles);
    return tiles;
}

export function generateWords(): String[] {
    var selected: String[] = [];
    var num_words = words.length - 1;

    while (selected.length < 25) {
        let random_word: String = words[getRandomInt(num_words)];
        if (!selected.includes(random_word)) {
            selected.push(random_word);
        }
    }

    return selected;
}

export function convertTiles(tiles: number[]) {
    var converted: String[] = [];
    for (let tile = 0; tile < num_tiles; tile++) {
        converted[tile] = TILES[tiles[tile]];
    }
    return converted;
}

function getRandomInt(max : number): number {
    return Math.floor(Math.random() * max);
}


