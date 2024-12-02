const { readFile } = require("fs/promises");


(async () => {
    const rawData = await readFile("day-2.input.txt", "utf-8");
    const levels = rawData
        .split("\n")
        .map(row => {
            return row.split(" ").map(l => parseInt(l, 10));
        });
})();

function isSafe(levels) {
    
}


// WIP
function allDecreasing(levels) {
    let safe = true;
    for (const i = 0; i < levels.length; i++) {
        if (i === levels.length - 1) {
            // no-op
        } else if (levels[i] > levels[i+1]) {
            safe = true;
        } else {
            safe = false;
        }
    }
    return safe;
}

function allDecreasing(levels) {
}

function adjacentLevelsInRange(level) {

}