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

function lightCell(coordinates) {
    return GRID[coordinates.substring(1)  - 1][convertColumn(coordinates)];
}

function isShip(coordinates) {
    return lightCell(coordinates) === "v";
}

function shipReport() {
    let array = [];
    let index = 0;
    for (let row = 1; row <= countRows(); row++) {
        for (const col in alph) {
            const coordinates = alph[col] + row;
            if (isShip(coordinates)) {
                array[index] = coordinates;
                index++;
            }
        }
    }
    if (array.length > 2) {
        array.splice(1,array.length - 2);
    }
    return array;
}
