function GameOfLife(w, h) {
    this.width = w;
    this.height = h;
    this.size = w * h;
    this.cells = [];
}

GameOfLife.prototype.getSize = function() {
    return this.size;
};

GameOfLife.prototype.fill = function() {
  var rows = [];
  var columns = [];
  for(var i=0; i < this.width; i++) {
      columns.push(0);
  }
  for(var i=0; i < this.height; i++) {
      rows.push(columns)
  }
  this.cells = rows;
  return rows;
};

GameOfLife.prototype.populate = function() {
    var rows = [];
    var columns = [];
    for(var i=0; i < this.width; i++) {
        columns.push(Math.round(Math.random())); // pretty weird, but it works, cause if Math.random() generates a number less than 0.5 the result will be 0 otherwise it should be 1.
    }
    for(var i=0; i < this.height; i++) {
        rows.push(columns)
    }
    this.cells = rows;
    return rows;
};

GameOfLife.prototype.getCells = function() {
    return this.cells;
};

GameOfLife.prototype.getCellAt = function(row, column) {
    return this.cells[row][column];
}

GameOfLife.prototype.setCell = function(row, column, state) {
    this.cells[row][column] = state
}

GameOfLife.prototype.toggleCell = function(row, column) {
    var currentValue = this.cells[row][column];
    this.cells[row][column] = currentValue ? 0 : 1;
}

GameOfLife.prototype.isLive = function(row, column) {
    return this.cells[row][column] === 1;
}

GameOfLife.prototype.getNeighbours = function(row, column) {
    var neighbours = [];
    var left = [row, column - 1];
    var right = [row, column + 1];
    var top = [row - 1, column];
    var bottom = [row + 1, column];
    var topLeft = [row - 1, column - 1];
    var topRight = [row + 1, column + 1];
    var bottomLeft = [row + 1, column - 1];
    var bottomRight = [row - 1, column + 1];
    var neighboursPos = [left, right, top, bottom, topLeft, topRight, bottomLeft, bottomRight];

    for(var i=0; i < neighboursPos.length; i++) {
        if(neighboursPos[i][0] !== -1 && neighboursPos[i][1] !== -1) {
            neighbours.push(neighboursPos[i]);
        }
    }
    return neighbours;
}

GameOfLife.prototype.tick = function() {
    return;
}

