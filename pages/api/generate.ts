/*
    Generate 5x5 tile board for spymasters
    0 - civilian
    1 - red
    2 - blue
    3 - assassin
*/
export default function tiles() {
    // init board with civilians
    var tiles:number[][] = [ [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0 ,0] ];
    // assassin
    let assassin_row = getRandomInt(5);
    let assassin_col = getRandomInt(5);
    tiles[assassin_row][assassin_col] = 3;
    for (let team = 1; team <= 2; team++) {
        var numTiles = 0;
        while (numTiles < 5) {
            let random_row = getRandomInt(5);
            let random_col = getRandomInt(5);
            let tile = tiles[random_row][random_col];
            if (tile == 0) {
                tiles[random_row][random_col] = team;
                numTiles++;
            }
        }
    }
}

function getRandomInt(max : number) {
    return Math.floor(Math.random() * max);
}