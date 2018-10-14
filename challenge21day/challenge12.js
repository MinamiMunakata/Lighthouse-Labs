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

// rewrite to return boolean
function lightCell(coordinates) {
    if (coordinates.substring(1) > countRows()) return false;
    if (convertColumn(coordinates) >= countColumns()) return false;
    return true;
}


console.log(lightCell("Z3"));
console.log(lightCell("A11"));
console.log(lightCell("C3"));