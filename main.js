var width = 9;
var height = 9;

var example1_cells = [
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,1,0,0,0,0],
    [0,0,0,0,0,1,0,0,0],
    [0,0,0,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0]
  ];

var gol = new GameOfLife(width,height, example1_cells);

function init() {
    var body = document.getElementsByTagName('body')[0];

    var container = document.getElementById('container');
    if(container) {
        container.innerText = '';
        var container_element = container; 
    } else {
        var container_element = document.createElement('div');
        container_element.setAttribute('id', 'container');
    }

    var table = document.createElement('table');
    table.setAttribute('id', 'game-of-life-grid');

    container_element.appendChild(table);
    //var blocks = gol.populate();

    for(var i = 0; i < width; i++) {
        table.appendChild(document.createElement('tr'));
        for(var j = 0; j < height; j++) {
            var cell = document.createElement('td');
            table.childNodes[i].appendChild(cell);
        }
    }

    for (var i = 0, row; row = table.rows[i]; i++) {
        for (var j = 0, col; col = row.cells[j]; j++) {
            if(gol.isLive(i,j)) {
                col.setAttribute('class', 'dead');
            }  
        }
     }
    body.appendChild(container_element);
}

function attachClick() {
    var tick_element = document.getElementById('tick-button');
    tick_element.addEventListener('click', function(e){
        e.preventDefault();
        gol.tick();
        init();
    });
}

function attachPlay() {
    var tick_element = document.getElementById('play-button');
    tick_element.addEventListener('click', function(e){
        e.preventDefault();
        window.setInterval(function(){
            gol.tick();
            init();
        }, 200);
    });
}

document.addEventListener('DOMContentLoaded', init, false);
document.addEventListener('DOMContentLoaded', attachClick, false);
document.addEventListener('DOMContentLoaded', attachPlay, false);