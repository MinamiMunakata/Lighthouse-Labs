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

function totalCells() {
    return  countColumns() * countRows();
}

function percentageReport() {
    let numOfRocks = allRocks().length;
    let numOfCurrents = allCurrents().length;
    return [(numOfRocks / totalCells() * 100).toFixed(2) 
        ,(numOfCurrents / totalCells() * 100).toFixed(2)];
}