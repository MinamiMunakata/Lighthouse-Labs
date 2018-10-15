const GRID = [
    ["", "", "", "^", "", "", "", "", "", ""],
    ["", "", "v", "", "~", "", "", "", "", ""],
    ["", "v", "", "", "^", "^", "", "", "", ""],
    ["", "", "", "", "^", "^", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "v", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "^", "~", "~", "", "", "", "^", "", ""],
    ["", "^", "", "~", "~", "", "", "", "", ""],
    ["", "^", "", "", "~", "~", "", "", "", ""],
  ];

let alph = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", 
            "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
            "U", "V", "W", "X", "Y", "Z"];

function countRows() {
    return GRID.length;
}

function convertColumn(coordinates) {
    return alph.indexOf(coordinates[0]);
}

// fixed lightCell(coordinates) to the one can take the number of rows more than 2 digits.
function lightCell(coordinates) {
    console.log(coordinates);
    return GRID[coordinates.substring(1)  - 1][convertColumn(coordinates)];
}

function isCurrent(coordinates) {
    return lightCell(coordinates) === "~";
}

function allCurrents() {
    let array = [];
    let index = 0;
    for (let row = 1; row <= countRows(); row++) {
        for (const col in alph) {
            const coordinates = alph[col] + row;
            if (isCurrent(coordinates)) {
                array[index] = coordinates;
                index++;
            }
        }
    }
    return array;
}

function isRock(coordinates) {
    return lightCell(coordinates) === "^";
}

function allRocks() {
    let array = [];
    let index = 0;
    for (let row = 1; row <= countRows(); row++) {
        for (const col in alph) {
            const coordinates = alph[col] + row;
            if (isRock(coordinates)) {
                array[index] = coordinates;
                index++;
            }
        }
    }
    return array;
}
