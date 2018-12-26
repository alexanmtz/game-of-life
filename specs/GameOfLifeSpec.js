describe("Game of life", function() {
  var gol;
  var starting_cells = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
  ];

  beforeEach(function() {
    gol = new GameOfLife(3,3);
    gol.fill();
  });

  describe("generate empty and get cells", function() {

    it("creates the grid of 5 rows and 5 coluns -> 25", function() {
        expect(gol.getSize()).toBe(9);
    });

    it("it fills the grid empty with cells", function() {
        expect(gol.getCells()).toEqual(starting_cells);
    });

    it("check if a cell in a given position is dead", function() {
        expect(gol.getCellAt(1,1)).toEqual(0);
    });
  });

  describe("populate and find neighboors", function() {
    it("populates cells", function() {
      expect(gol.populate()).not.toEqual(starting_cells);
    });

    it("get neighboors on first position", function() {
      expect(gol.getNeighbours(0,0)).toEqual([[0,1], [1,0], [1,1]]);
    });

    it("get neighboors in another position", function() {
        expect(gol.getNeighbours(0,1)).toEqual([[0,0], [0,2], [1,1], [1,2], [1,0]]);
    });

    it("get neighboors in a more intern position", function() {
        expect(gol.getNeighbours(1,1)).toEqual([[1,0], [1,2], [0,1], [2,1], [0,0], [2,2], [2,0], [0,2]]);
    });
  });

  describe("applying life and death conditions", function() {
    it("set a cell to alive", function(){
      gol.setCell(0, 0, 1);
      expect(gol.getCellAt(0,0)).toEqual(1);
    });

    it("toggle a cell", function(){
      gol.toggleCell(0, 0);
      expect(gol.getCellAt(0,0)).toEqual(1);
    })

  });

  describe("cell alive or dead getters", function() {
    it("dead cells", function() {
      expect(gol.isLive(0,0)).toEqual(false)
    })
    it("live cells", function() {
      gol.setCell(0,0,1);
      expect(gol.isLive(0,0)).toEqual(true);
    })
  });

  xdescribe("going to generations", function() {
    it("defining the first generation with a empty grid", function() {
      gol.tick();
      expect(gol.getCellAt(0, 0)).toEqual(0);
      expect(gol.getCellAt(0, 1)).toEqual(0);
      expect(gol.getCellAt(0, 2)).toEqual(0);

      expect(gol.getCellAt(1, 0)).toEqual(0);
      expect(gol.getCellAt(1, 1)).toEqual(0);
      expect(gol.getCellAt(1, 2)).toEqual(0);
      
      expect(gol.getCellAt(2, 0)).toEqual(0);
      expect(gol.getCellAt(2, 1)).toEqual(0);
      expect(gol.getCellAt(2, 2)).toEqual(0);
    })

    xit("Any live cell with fewer than two live neighbours dies, as if caused by underpopulation", function() {
      gol.setCell(0, 0, 1);
      gol.tick();
      var neighboors = gol.getNeighbours(0, 0)

      expect(gol.getCellAt(0, 0)).toEqual(1);
      expect(gol.getCellAt(0, 1)).toEqual(0);
      expect(gol.getCellAt(0, 2)).toEqual(0);
      expect(neighboors[0]).toEqual([0, 1]);
      expect(neighboors[1]).toEqual([1, 0]);
      expect(neighboors[2]).toEqual([1, 1]);
    })
  })

  afterEach(function(){
    gol.setCell(0, 0, 0);
  })

});
