const { readFile } = require("fs/promises");

(async () => {
    const rawData = await readFile("day-2.input.txt", "utf-8");
    const levels = rawData
        .split("\n")
        .map(row => {
            return row.split(" ").map(l => parseInt(l, 10));
        });
    const safeLevels = levels.reduce((acc, level) => {
        if (allInRange(level)) {
            return acc + 1;
        }
        return acc;
    }, 0);
    console.log({ safeLevels });
})();

function allInRange(level) {
    let safe = true;
    for (let i = 0; i < level.length - 1; i++) {
        const value = Math.abs(level[i] - level[i+1]);
        if (value > 0 && value <= 3) {
            safe = true;
        } else {
            return false;
        }
    }
    return verifyLevelIncreasingOrDecreasing(level);
}

function verifyLevelIncreasingOrDecreasing(level) {
    const isDescending = level.every((num, i) => i === 0 || num < level[i-1]);
    const isAscending = level.every((num, i) => i === 0 || num > level[i-1]);
    return isAscending || isDescending;
}

