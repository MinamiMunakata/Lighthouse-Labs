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

function calcDistance(coordinates1, coordinates2) {
    let row1 = coordinates1.substring(1) - 1;
    let col1 = convertColumn(coordinates1);
    let row2 = coordinates2.substring(1) - 1;
    let col2 = convertColumn(coordinates2);
    return Math.sqrt(
        Math.pow((row1 - row2), 2) + 
        Math.pow((col1 - col2), 2)).toFixed(2);
}
