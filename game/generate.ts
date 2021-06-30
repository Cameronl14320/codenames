import { words } from '../data/words'

const size = 5;
const teams : number[] = [9, 8];
/*
    Generate 5x5 tile board for spymasters
    0 - red
    1 - blue
    2 - civilian
    3 - assassin
*/
export function generateTiles(): number[][] {
    // init board with civilians
    var tiles:number[][] = [ [2, 2, 2, 2, 2], [2, 2, 2, 2, 2], [2, 2, 2, 2, 2], [2, 2, 2, 2, 2], [2, 2, 2, 2 ,2] ];
    // assassin
    let assassin_row = getRandomInt(5);
    let assassin_col = getRandomInt(5);
    tiles[assassin_row][assassin_col] = 3; // update -- replace tile with assassin
    // teams
    for (let team = 0; team <= 1; team++) {
        var numTiles = 2;
        while (numTiles < teams[team]) {
            let random_row = getRandomInt(5);
            let random_col = getRandomInt(5);
            let tile = tiles[random_row][random_col];
            if (tile == 2) { // check if civilian 
                tiles[random_row][random_col] = team; // update - replace tile with team
                numTiles++;
            }
        }
    }
    // console.log(tiles);
    return tiles;
}

export function generateWords(): String[][] {
    var final_selected: String[][] = [[], [], [], [], []];
    var selected: String[] = [];
    var num_words = words.length - 1;

    while (selected.length < 25) {
        let random_word: String = words[getRandomInt(num_words)];
        if (!selected.includes(random_word)) {
            selected.push(random_word);
        }
    }

    var counter = 2;
    console.log("selected: " + selected);
    for (let word_col = 2; word_col < 5; word_col++) {
        for (let word_row = 2; word_row < 5; word_row++) {
            final_selected[word_col][word_row] = selected[counter];
            counter++;
        }
    }
    // console.log(final_selected);
    return final_selected;
}

function getRandomInt(max : number): number {
    return Math.floor(Math.random() * max);
}
