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

function countColumns() {
    return GRID[0].length;
}

function convertColumn(coordinates) {
    return alph.indexOf(coordinates[0]);
}

function lightCell(coordinates) {
    return GRID[coordinates.substring(1)  - 1][convertColumn(coordinates)];
}


function isCurrent(coordinates) {
    return lightCell(coordinates) === "~";
}

function isRock(coordinates) {
    return lightCell(coordinates) === "^";
}

function howDangerous(coordinates) {
    if(isCurrent(coordinates)) return 50;
    if(isRock(coordinates)) return 100;
    return 0;
}

function safetyReport() {
    for (let row = 0; row < countRows(); row++) {
        for (let col = 0; col < countColumns(); col++) {
            GRID[row][col] = howDangerous(alph[col] + (row + 1));          
        }
    }
    return GRID;
}

console.log(safetyReport());