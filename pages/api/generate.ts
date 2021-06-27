import { words } from '../../data/words'

const size = 5;
const teams : Number[] = [9, 8];

/*
    Generate 5x5 tile board for spymasters
    0 - civilian
    1 - red
    2 - blue
    3 - assassin
*/
export function Tiles(): Number[][] {
    // init board with civilians
    var tiles:Number[][] = [ [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0 ,0] ];
    // assassin
    let assassin_row = getRandomInt(5);
    let assassin_col = getRandomInt(5);
    tiles[assassin_row][assassin_col] = 3; // update -- replace tile with assassin
    // teams
    for (let team = 1; team <= 2; team++) {
        var numTiles = 0;
        while (numTiles < teams[team]) {
            let random_row = getRandomInt(5);
            let random_col = getRandomInt(5);
            let tile = tiles[random_row][random_col];
            if (tile == 0) { // check if civilian 
                tiles[random_row][random_col] = team; // update - replace tile with team
                numTiles++;
            }
        }
    }
    // console.log(tiles);
    return tiles;
}

export function Words(): String[][] {
    var final_selected: String[][] = [[], [], [], [], []];
    var selected: String[] = [];
    var num_words = words.length - 1;

    while (selected.length < 25) {
        let random_word: String = words[getRandomInt(num_words)];
        if (!selected.includes(random_word)) {
            selected.push(random_word);
        }
    }

    var counter = 0;
    console.log("selected: " + selected);
    for (let word_col = 0; word_col < 5; word_col++) {
        for (let word_row = 0; word_row < 5; word_row++) {
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