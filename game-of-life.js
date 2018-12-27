function GameOfLife(w, h, cells) {
    this.width = w;
    this.height = h;
    this.size = w * h;
    this.cells = cells || [];
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
    for(var i=0; i < this.width; i++) {
        rows.push([]);
        for(var j=0; j < this.height; j++) {
            rows[i][j] = Math.round(Math.random());
        }
    }
    this.cells = rows;
    return this;
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

GameOfLife.prototype.getLiveNeighbours = function(row, column) {
    var neighbours = this.getNeighbours(row, column);
    var liveNeighbours = [];
    for(var i = 0; i < neighbours.length; i++) {
        if(this.isLive(neighbours[i][0], neighbours[i][1])) {
            liveNeighbours.push(neighbours[i])
        }
    }
    return liveNeighbours;
}

GameOfLife.prototype.tick = function() {
    for(var i = 0; i < this.width - 1; i++) {
        for(var j = 0; j < this.height - 1; j++) {
            var cell_state = this.isLive(i,j);
            var cell_neighbours = this.getLiveNeighbours(i,j);
            if(cell_state) {
                if(cell_neighbours.length < 2) {
                    this.setCell(i, j, 0);
                }
                if(cell_neighbours.length === 2 || cell_neighbours.length === 3) {
                    this.setCell(i, j, 1);
                }
                if(cell_neighbours.length > 3) {
                    this.setCell(i, j, 0);
                }
            } else {
                if(cell_neighbours.length === 3) {
                    this.setCell(i, j, 1);
                }
            }
        }
    }
}


